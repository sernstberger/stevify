import * as React from "react";
import {
  connect,
  Dispatch,
} from "react-redux";
import {
  Redirect,
  RouteComponentProps,
} from "react-router";

export interface IAuthenticatedContainerStateProps {
  authenticated?: boolean;
}

export interface IAuthenticatedContainerDispatchProps {
}

export interface IAuthenticatedContainerOwnProps extends RouteComponentProps<any> {
}

type AuthenticatedContainerProps =
  IAuthenticatedContainerStateProps &
  IAuthenticatedContainerDispatchProps &
  IAuthenticatedContainerOwnProps;

class AuthenticatedContainer extends React.Component<AuthenticatedContainerProps, {}> {
  public render() {
    const {authenticated, children} = this.props;
    return authenticated
      ? <div>{children}</div>
      : <Redirect to={{
        pathname: "/login",
        // state: {from: location},
      }}/>;
  }
}

const mapStateToProps =
  (state: any, ownProps?: IAuthenticatedContainerOwnProps): any => ({
    ...ownProps,
    authenticated: state.session.authenticated,
  });

const mapDispatchToProps =
  (dispatch: Dispatch<any>, ownProps?: IAuthenticatedContainerOwnProps): IAuthenticatedContainerDispatchProps => ({});

export default
connect<IAuthenticatedContainerStateProps, IAuthenticatedContainerDispatchProps, IAuthenticatedContainerOwnProps>(
  mapStateToProps, mapDispatchToProps,
)(AuthenticatedContainer);
