import * as React from "react";
// import { Link } from "react-router-dom";

import { history } from "configureStore";

import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";



interface IAuthenticatedMainContentProps extends StyledComponentProps {
  active?: string;
}

type SidebarNavProps =
  & IAuthenticatedMainContentProps
  & StyledComponentProps;

function createData(id: number, name: string, path: string) {
  return { id, name, path };
}

let resultInt = "";

class SidebarNav extends React.Component<SidebarNavProps> {

  constructor(props: any) {
    super(props);
  }

  public componentWillMount() {
    const parts = window.location.pathname;
    const regexp = /(?:client\/)(\d+)/i;
    const result = parts.match( regexp );
    resultInt = result![1];
  }

  public render() {

    const NavItemsData = [
      createData(1, "Dashboard", `/client/${resultInt}`),
      createData(2, "Reports", `/client/${resultInt}/reports/AdjustmentAnalysisList`),
      // createData(3, "Settings", "/Settings"),
    ];

    return (
      <div>
        <Drawer type="permanent">
          <List>
            {NavItemsData.map((navItem) => {
              return (
                <ListItem
                  key={navItem.id}
                  className={`
                    ${this.props.classes!.SidebarNavItem}
                    ${this.props.active === navItem.name && this.props.classes!.SidebarNavItemActive}
                  `}
                  onClick={() => history.push(`${navItem.path}`)}
                >
                  <ListItemIcon>
                      <img src={`/assets/images/${navItem.name}.svg`} alt={navItem.name} />
                    </ListItemIcon>
                    <ListItemText
                      primary={navItem.name}
                      disableTypography
                      className={this.props.classes!.SidebarNavItemLinkText}
                    />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles<IStyles["classes"]>(styleSheet)(SidebarNav);
