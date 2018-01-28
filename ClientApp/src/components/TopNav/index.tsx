import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import TopNavAppBar from "./TopNavAppBar";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

import { MenuItem } from "material-ui/Menu";

import { connect, Dispatch } from "react-redux";
import * as sessionActions from "store/session/sessionActions";

interface ITopNavProps extends StyledComponentProps {
  title?: string;
  group?: string;
  client?: string;
  section?: string;
  child?: boolean;
}

interface IReduxStateProps {
  email: string;
}

interface IReduxDispatchProps {
  logoutAsync: () => void;
}

type TopNavProps =
  ITopNavProps &
  IReduxStateProps &
  IReduxDispatchProps;

const TopNav = (props: TopNavProps) => {
  const { title, group, client, section, child } = props;
  return (
    <TopNavAppBar
      userEmail={props.email}
      title={props.title}
      group={props.group}
      client={props.client}
      section={props.section}
      child={props.child}
    />
  );
};

const mapStateToProps =
(state: any, ownProps?: ITopNavProps): any => ({
  email: state.session.email,
});

const mapDispatchToProps =
(dispatch: Dispatch<any>, ownProps?: ITopNavProps): IReduxDispatchProps => ({
  logoutAsync: () => dispatch(sessionActions.logoutAsync()),
});

export default connect<IReduxStateProps, IReduxDispatchProps, ITopNavProps>(
  mapStateToProps, mapDispatchToProps,
)(TopNav);
