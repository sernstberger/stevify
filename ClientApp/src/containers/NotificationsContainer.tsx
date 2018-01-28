import * as React from "react";
import { connect, Dispatch } from "react-redux";

import INotification from "infrastructure/interfaces/INotification";
import { IApplicationState, reducers } from "store";
import * as viewActions from "store/views/actions";

import Notifications from "components/shared/Notifications";

interface INotificationsContainerOwnProps {}

interface IReduxStateProps {
  notifications: INotification[];
}

interface IReduxDispatchProps {
  spliceNotification: (index: number) => void;
}

type INotificationsContainer =
  INotificationsContainerOwnProps &
  IReduxDispatchProps &
  IReduxStateProps;

class NotificationsContainer extends React.Component<INotificationsContainer, {}> {

  public render() {
    if (this.props.notifications.length) {
      return <Notifications {...this.props} />;
    }
    return null;
  }
}

const mapStateToProps = (state: IApplicationState): IReduxStateProps => {
  return {
    notifications: state.global.notifications,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<() => void>,
                            ownProps: INotificationsContainerOwnProps): IReduxDispatchProps => ({
  spliceNotification: (index: number) => dispatch(viewActions.spliceNotification({index})),
});

export {
  INotificationsContainer,
};

export default connect<IReduxStateProps, IReduxDispatchProps, INotificationsContainerOwnProps>
(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
