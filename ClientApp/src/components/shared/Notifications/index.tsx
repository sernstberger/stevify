import * as React from "react";

import { INotificationsContainer } from "containers/NotificationsContainer";
import INotification from "infrastructure/interfaces/INotification";

import Close from "material-ui-icons/Close";
import IconButton from "material-ui/IconButton";
import Snackbar from "material-ui/Snackbar";

import { IStyles } from "assets/styles/themes";
import {StyledComponentProps, withStyles} from "material-ui/styles";
import styleSheet from "./styles";

interface INotificationsProps extends INotificationsContainer {}

type Props =
  INotificationsProps &
  StyledComponentProps;

const displayNotifications = (props: Props) => {
  return props.notifications.map((notification: INotification, index: number) =>
    <Snackbar
      key={index}
      anchorOrigin={{vertical: "bottom", horizontal: "center"}}
      message={<span>{notification.message}</span>}
      style={{width: "100%"}}
      open={true}
      SnackbarContentProps={{
        className: props.classes![notification.type ? notification.type : "success"],
        style: "max-width: auto; width: 100%",
      }}
      autoHideDuration={notification.duration ? notification.duration : undefined}
      onClose={() => props.spliceNotification(index)}
      action={
        <IconButton
          key="close"
          aria-label="Close"
          className={props.classes![notification.type ? notification.type : "success"]}
          onClick={() => props.spliceNotification(index)}>
          <Close />
        </IconButton>
      }/>,
  );
};

const Notifications = (props: Props) =>
  <div>
    {displayNotifications(props)}
  </div>;

export default withStyles<IStyles["classes"]>(styleSheet)(Notifications);
