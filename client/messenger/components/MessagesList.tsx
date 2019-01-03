import * as classNames from "classnames";
import * as React from "react";
import * as RTG from "react-transition-group";
import { iconRight } from "../../icons/Icons";
import {
  IIntegrationMessengerData,
  IIntegrationMessengerDataMessagesItem,
  IIntegrationUiOptions
} from "../../types";
import { scrollTo } from "../../utils";
import { getLocalStorageItem } from "../connection";
import { IMessage } from "../types";
import { Message } from "./";

type Props = {
  messages: IMessage[];
  isOnline: boolean;
  color?: string;
  inputFocus: () => void;
  uiOptions: IIntegrationUiOptions;
  messengerData: IIntegrationMessengerData;
  updateCustomer: (email: string, callback: () => void) => void;
};

class MessagesList extends React.Component<
  Props,
  { hideNotifyInput?: boolean }
> {
  private node: HTMLDivElement | null = null;
  private shouldScrollBottom: boolean = false;

  constructor(props: Props) {
    super(props);

    this.state = {};
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

  onNotify = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    const email = (document.getElementById(
      "notify-email-input"
    )! as HTMLInputElement).value;

    const callback = () => {
      this.setState({ hideNotifyInput: true });
    };

    this.props.updateCustomer(email, callback);
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
      return (
        <li className="erxes-spacial-message">
          <span> Thank you. </span>
        </li>
      );
    }

    return (
      <li className="erxes-spacial-message">
        Get notified by email
        <div className="notify-email">
          <form onSubmit={this.onNotify}>
            <input
              type="email"
              placeholder="e.g info@example.net"
              id="notify-email-input"
              style={{ display: "inline" }}
            />
            <button type="submit" style={{ backgroundColor: this.props.color }}>
              <span>{iconRight}</span>
            </button>
          </form>
        </div>
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
