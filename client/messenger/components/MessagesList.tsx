import * as classNames from "classnames";
import * as React from "react";
import * as RTG from "react-transition-group";
import {
  IIntegrationMessengerData,
  IIntegrationMessengerDataMessagesItem,
  IIntegrationUiOptions
} from "../../types";
import { scrollTo } from "../../utils";
import { getLocalStorageItem } from "../connection";
import { IMessage } from "../types";
import { Message } from "./";
import AccquireInformation from "./AccquireInformation";

type Props = {
  messages: IMessage[];
  isOnline: boolean;
  color?: string;
  inputFocus: () => void;
  uiOptions: IIntegrationUiOptions;
  messengerData: IIntegrationMessengerData;
  updateCustomer: (
    doc: { [key: string]: string },
    callback: () => void
  ) => void;
};

type State = {
  hideNotifyInput: boolean;
};

class MessagesList extends React.Component<Props, State> {
  private node: HTMLDivElement | null = null;
  private shouldScrollBottom: boolean = false;

  constructor(props: Props) {
    super(props);

    this.state = { hideNotifyInput: false };
  }

  componentDidMount() {
    if (this.node) {
      this.node.scrollTop = this.node.scrollHeight;
      this.makeClickableLink();
    }
  }

  componentWillUpdate() {
    const node = this.node;

    if (node) {
      this.shouldScrollBottom =
        node.scrollHeight - (node.scrollTop + node.offsetHeight) < 20;
    }
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.messages !== this.props.messages) {
      if (this.node && this.shouldScrollBottom) {
        scrollTo(this.node, this.node.scrollHeight, 500);
      }
      this.makeClickableLink();
    }
  }

  makeClickableLink() {
    const nodes = Array.from(document.querySelectorAll("#erxes-messages a"));

    nodes.forEach(node => {
      node.setAttribute("target", "__blank");
    });
  }

  onNotify = ({ type, value }: { type: string; value: string }) => {
    const doc = {
      [type]: value
    };

    this.props.updateCustomer(doc, () =>
      this.setState({ hideNotifyInput: true })
    );
  };

  renderAwayMessage(messengerData: IIntegrationMessengerData) {
    const { isOnline } = this.props;
    const messages =
      messengerData.messages || ({} as IIntegrationMessengerDataMessagesItem);

    if (isOnline || !messages.away) {
      return null;
    }

    return <li className="erxes-spacial-message away">{messages.away}</li>;
  }

  renderNotifyInput(messengerData: IIntegrationMessengerData) {
    if (messengerData.requireAuth || getLocalStorageItem("hasNotified")) {
      return null;
    }

    if (this.state.hideNotifyInput) {
      const messages =
        messengerData.messages || ({} as IIntegrationMessengerDataMessagesItem);

      return (
        <li className="erxes-spacial-message">
          <span> {messages.thank || "Thank you. "}</span>
        </li>
      );
    }

    return (
      <li className="erxes-spacial-message">
        Get notified
        <AccquireInformation save={this.onNotify} loading={false} />
      </li>
    );
  }

  renderWelcomeMessage(messengerData: IIntegrationMessengerData) {
    const { isOnline } = this.props;
    const messages =
      messengerData.messages || ({} as IIntegrationMessengerDataMessagesItem);

    if (!isOnline || !messages.welcome) {
      return null;
    }

    return <li className="erxes-spacial-message">{messages.welcome}</li>;
  }

  render() {
    const { uiOptions, messengerData, messages } = this.props;
    const { color, wallpaper } = uiOptions;
    const backgroundClass = classNames("erxes-messages-background", {
      [`bg-${wallpaper}`]: wallpaper
    });

    return (
      <div className={backgroundClass} ref={node => (this.node = node)}>
        <ul id="erxes-messages" className="erxes-messages-list slide-in">
          {this.renderWelcomeMessage(messengerData)}
          <RTG.TransitionGroup component={null}>
            {messages.map(message => {
              const _id: any = message._id;

              if (_id < 0) {
                return (
                  <RTG.CSSTransition
                    key={message._id}
                    timeout={500}
                    classNames="slide-in"
                  >
                    <Message color={color} {...message} />
                  </RTG.CSSTransition>
                );
              } else {
                return <Message key={message._id} color={color} {...message} />;
              }
            })}
          </RTG.TransitionGroup>
          {this.renderAwayMessage(messengerData)}
          {this.renderNotifyInput(messengerData)}
        </ul>
      </div>
    );
  }
}

export default MessagesList;
