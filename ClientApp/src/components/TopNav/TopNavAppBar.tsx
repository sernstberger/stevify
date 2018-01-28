import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import UserMenu from "./UserMenu";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

interface ITopNavAppBarProps extends StyledComponentProps {
  title?: string;
  group?: string;
  client?: string;
  section?: string;
  child?: boolean;
  userEmail: string;
}

const TopNavAppBar = (props: ITopNavAppBarProps) => {
    const { title, group, client, section, child } = props;
    return (
        <AppBar position="fixed" elevation={0} color="default" classes={{}}>
            <div className={props.classes!.logo}>
                <Link to="/">
                    <img src="/assets/images/logo.png" className={props.classes!.logoImg}/>
                </Link>
            </div>
            <Toolbar>
              <div>
                <Typography type="display1" color="inherit">
                  {title}
                </Typography>
                {child &&
                  <ul className={props.classes!.BreadcrumbList}>
                    <li className={props.classes!.BreadcrumbListItem}>
                      <Link to="/" className={props.classes!.BreadcrumbListItemLink}>
                        Young at Heart Accounts
                      </Link>
                    </li>
                    <li className={props.classes!.BreadcrumbListItem}>{group}</li>
                    {client && <li className={props.classes!.BreadcrumbListItem}>{client}</li>}
                    {section && <li className={props.classes!.BreadcrumbListItem}>{section}</li>}
                    {/* {title && <li className={props.classes!.BreadcrumbListItem}>{title}</li>} */}
                  </ul>
                }
              </div>
              <UserMenu
                userEmail={props.userEmail}
              />
            </Toolbar>
        </AppBar>
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(TopNavAppBar);
