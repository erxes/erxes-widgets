import * as React from "react";
import {
  increaseViewCount,
  saveForm,
  sendEmail
} from "../../../form/containers/utils";
import { ICurrentStatus, IForm } from "../../../form/types";
import { IEmailParams, IIntegration } from "../../../types";
import { connection } from "../../connection";

interface IState {
  currentStatus: ICurrentStatus;
}

interface IStore extends IState {
  saveForm: (doc: { [key: string]: any }) => void;
  createNew: () => void;
  sendEmail: (params: IEmailParams) => void;
  getIntegration: () => IIntegration;
  getForm: () => IForm;
}

const LeadContext = React.createContext({} as IStore);

export const LeadConsumer = LeadContext.Consumer;

export class LeadProvider extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentStatus: { status: "INITIAL" }
    };
  }

  componentDidMount() {
    this.increaseViewCount();
  }

  /*
   * Increasing view count
   */
  increaseViewCount = () => {
    const form = this.getForm();
    increaseViewCount(form._id);
  };

  /*
   * Save user submissions
   */
  save = (doc: { [key: string]: any }) => {
    saveForm({
      doc,
      browserInfo: connection.browserInfo,
      integrationId: this.getIntegration()._id,
      formId: this.getForm()._id,
      saveCallback: (data: { [key: string]: any }) => {
        const { status, errors } = data.saveForm;

        this.setState({
          currentStatus: {
            status: status === "ok" ? "SUCCESS" : "ERROR",
            errors
          }
        });
      }
    });
  };

  /*
   * Redisplay form component after submission
   */
  createNew = () => {
    this.setState({ currentStatus: { status: "INITIAL" } });
  };

  getIntegration = () => {
    return connection.formData.integration;
  };

  getForm = () => {
    return connection.formData.form;
  };

  render() {
    return (
      <LeadContext.Provider
        value={{
          ...this.state,
          saveForm: this.save,
          createNew: this.createNew,
          sendEmail,
          getIntegration: this.getIntegration,
          getForm: this.getForm
        }}
      >
        {this.props.children}
      </LeadContext.Provider>
    );
  }
}