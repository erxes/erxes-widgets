import { Messages, Customers } from './connectors';
import { pubsub } from './subscription-manager';
import { getIntegration, getCustomer, getOrCreateConversation } from './utils';
import { createMessage } from './utils';

export default {
  Mutation: {
    simulateInsertMessage(root, args) {
      const message = Messages.findOne({ _id: args.messageId });

      pubsub.publish('messageInserted', message);
      pubsub.publish('notification');

      return message;
    },

    /*
     * create or update customer info, when connection establish
     */
    connect(root, args) {
      let integrationId;

      // find integration
      return getIntegration(args.brandCode)

        // find customer
        .then((integration) => {
          integrationId = integration._id;

          return getCustomer(integration._id, args.email);
        })

        // update or create customer
        .then((customer) => {
          const now = new Date();

          const inAppMessagingData = {
            lastSeenAt: now,
            isActive: true,
          };

          // update customer
          if (customer) {
            // update inAppMessagingData
            Customers.update(customer._id, { $set: { inAppMessagingData } });

            if ((now - customer.inAppMessagingData.lastSeenAt) > 30 * 60 * 1000) {
              // update session count
              return Customers.update(
                customer._id,
                { $inc: { 'inAppMessagingData.sessionCount': 1 } }
              );
            }

            return 'updated';
          }

          // create new customer
          const customerObj = new Customers({
            createdAt: new Date,
            email: args.email,
            name: args.name,
            integrationId,
            inAppMessagingData: { ...inAppMessagingData, sessionCount: 1 },
          });

          return customerObj.save();
        });
    },

    /*
     * create new message
     */
    insertMessage(root, args) {
      const { brandCode, email, conversationId, message, attachments } = args;

      let integrationId;
      let customerId;

      return getIntegration(brandCode)
        // find customer
        .then((integration) => {
          integrationId = integration._id;

          return getCustomer(integrationId, email);
        })

        // get or create conversation
        .then(customer => {
          customerId = customer._id;

          return getOrCreateConversation({
            conversationId,
            integrationId,
            customerId: customer._id,
            message,
          });
        })

        // create message
        .then((id) =>
          createMessage({
            conversationId: id,
            customerId,
            message,
            attachments,
          })
        )

        // publish change
        .then((msg) => {
          pubsub.publish('messageInserted', msg);
          pubsub.publish('notification');

          return msg;
        })

        // catch exception
        .catch((error) => {
          console.log(error); // eslint-disable-line no-console
        });
    },

    /*
     * mark given conversation's messages as read
     */
    readConversationMessages(root, args) {
      return Messages.update(
        {
          conversationId: args.conversationId,
          userId: { $exists: true },
          isCustomerRead: { $exists: false },
        },
        { isCustomerRead: true },
        { multi: true },

        () => {
          // notify all notification subscribers that message's read
          // state changed
          pubsub.publish('notification');
        }
      );
    },
  },
};