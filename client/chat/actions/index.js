import gql from 'graphql-tag';
import { FORM_TOGGLE } from '../constants';
import client from '../../apollo-client';
import { connection } from '../connection';

export const toggle = (isVisible) => {
  // notify parent window launcher state
  window.parent.postMessage({
    fromErxes: true,
    isFormVisible: isVisible,
  }, '*');

  return {
    type: FORM_TOGGLE,
  };
};

export const createConversation = (doc) =>
  () =>
    client.mutate({
      mutation: gql`
        mutation chatCreateConversation(${connection.queryVariables},
          $email: String!, $content: String!) {

          chatCreateConversation(${connection.queryParams}, email: $email, content: $content) {
            _id
          }
        }`,

      variables: {
        ...connection.data,
        ...doc,
      },
    });