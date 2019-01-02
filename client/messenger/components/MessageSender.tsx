import * as React from "react";
import { iconAttach } from "../../icons/Icons";

type Props = {
  placeholder?: string;
  conversationId: string | null;
  isAttachingFile: boolean;
  isParentFocused: boolean;
  sendMessage: (message: string) => void;
  sendFile: (file: File) => void;
  readMessages: (conversationId: string) => void;
  onTextInputBlur: () => void;
  collapseHead: () => void;
};

type State = {
  message: string;
};

class MessageSender extends React.Component<Props, State> {
  private textarea: HTMLTextAreaElement | null = null;

  constructor(props: Props) {
    super(props);

    this.state = { message: "" };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  readMessage() {
    if (this.props.conversationId) {
      this.props.readMessages(this.props.conversationId);
    }
  }

  componentDidMount() {
    if (this.textarea && window.innerWidth > 415) {
      this.textarea.focus();
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isParentFocused) {
      this.readMessage();
      if (this.textarea) {
        this.textarea.focus();
      }
    }
  }

  onSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({ message: "" });
  }

  handleMessageChange(e: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({ message: e.currentTarget.value });
  }

  handleOnBlur() {
    this.props.onTextInputBlur();
  }

  handleClick() {
    this.props.collapseHead();
  }

  handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();

      const { message } = this.state;

      if (e.shiftKey) {
        this.setState({ message: `${message}\n` });
      } else {
        this.props.sendMessage(message);
        this.setState({ message: "" });
        this.readMessage();
      }
    }
  }

  handleFileInput(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();

    const files = e.currentTarget.files;

    if (files && files.length > 0) {
      this.props.sendFile(files[0]);
    }
  }

  render() {
    return (
      <form className="erxes-message-sender" onSubmit={this.onSubmit}>
        <textarea
          ref={textarea => {
            this.textarea = textarea;
          }}
          className="reply"
          placeholder={this.props.placeholder}
          value={this.state.message}
          onChange={this.handleMessageChange}
          onBlur={this.handleOnBlur}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyPress}
        />
        {this.props.isAttachingFile ? (
          <div className="loader" />
        ) : (
          <label htmlFor="file-upload" className="btn-attach">
            {iconAttach}
            <input
              id="file-upload"
              type="file"
              onChange={this.handleFileInput}
            />
          </label>
        )}
      </form>
    );
  }
}

export default MessageSender;
