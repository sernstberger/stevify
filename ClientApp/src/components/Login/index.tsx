import * as React from "react";
import {connect, Dispatch} from "react-redux";

import { RouteComponentProps } from "react-router";
import * as SessionActions from "../../store/session/sessionActions";
import { ISessionReducerState } from "../../store/session/sessionReducer";

import LoginCard from "./LoginCard";
import LoginInput from "./LoginInput";

export interface ILoginFormProps {
  currentEmail: string;
  currentPassword: string;
  loggingIn: boolean;
  loginFailureReason: string;
  submitAuthData: () => void;
  updateSessionField: (fieldName: string, value: any) => void;
}

interface ILoginOwnProps extends RouteComponentProps<{}> {}

const loginDisabled = (props: ILoginFormProps) =>
  props.loggingIn || props.currentEmail === "" || props.currentPassword === "";

const loginEnabled = (props: ILoginFormProps) =>
  !loginDisabled(props);

class LoginForm extends React.Component<ILoginFormProps, {}> {
  public render() {
    return (
      <LoginCard submitAction={this.props.submitAuthData}>
        <LoginInput
          id="email"
          label="Email"
          value={this.props.currentEmail}
          type="text"
          onChange={(e: any) => this.props.updateSessionField("email", e.target.value)}
        />

        <LoginInput
          id="password"
          label="Password"
          value={this.props.currentPassword}
          type="password"
          onChange={(e: any) => {
            this.props.updateSessionField("password", e.target.value);
          }}
          onKeyUp={(e: KeyboardEvent) => {
            if (loginEnabled(this.props) && e.keyCode === 13) {
              this.props.submitAuthData();
            }
          }}
        />
      </LoginCard>
    );
  }
}

const mapStateToProps = (
  {session}: {session: ISessionReducerState}, ownProps?: ILoginOwnProps,
): ILoginStateProps => ({
  currentEmail: session.email,
  currentPassword: session.password,
  loggingIn: session.loggingIn,
  loginFailureReason: session.loginFailureReason,
});

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: ILoginOwnProps): ILoginDispatchProps => ({
  submitAuthData: () => dispatch(SessionActions.submitAuthData()),
  updateSessionField: (fieldName: string, value: any) =>
    dispatch(SessionActions.updateSessionField({fieldName, value})),
});

export default connect<ILoginStateProps, ILoginDispatchProps, ILoginOwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

interface ILoginStateProps {
  currentEmail: string;
  currentPassword: string;
  loggingIn: boolean;
  loginFailureReason: string;
}

interface ILoginDispatchProps {
  submitAuthData: () => void;
  updateSessionField: (fieldName: string, value: string) => void;
}
