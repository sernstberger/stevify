import * as React from "react";

import { MenuItem } from "material-ui/Menu";

import { connect, Dispatch } from "react-redux";
import * as sessionActions from "../../store/session/sessionActions";

interface ILogoutActionOwnProps {}

interface IReduxStateProps {}

interface IReduxDispatchProps {
  logoutAsync: () => void;
}

type LogoutActionProps =
  IReduxStateProps &
  IReduxDispatchProps;

const LogoutAction = (props: LogoutActionProps) => {
    return (
      <MenuItem onClick={() => props.logoutAsync()}>Logout</MenuItem>
    );
};

const mapStateToProps =
(state: any, ownProps?: ILogoutActionOwnProps): any => ({
});

const mapDispatchToProps =
(dispatch: Dispatch<any>, ownProps?: ILogoutActionOwnProps): IReduxDispatchProps => ({
  logoutAsync: () => dispatch(sessionActions.logoutAsync()),
});

export default connect<IReduxStateProps, IReduxDispatchProps, ILogoutActionOwnProps>(
  mapStateToProps, mapDispatchToProps,
)(LogoutAction);
