import * as React from "react";

import Button from "material-ui/Button";
import Menu from "material-ui/Menu";

import KeyboardArrowDown from "material-ui-icons/KeyboardArrowDown";

import LogoutAction from "./LogoutAction";

interface IUserMenuProps {
  userEmail: string;
}

class UserMenu extends React.Component<IUserMenuProps> {
  public state = {
    anchorEl: undefined,
    open: false,
  };

  public handleClick = (event: any) => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  }

  public handleRequestClose = () => {
    this.setState({ open: false });
  }

  public render() {
    return (
      <div>
        <Button
          aria-owns={this.state.open ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Hello, {this.props.userEmail}
          <KeyboardArrowDown />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleRequestClose}
        >
          {/* <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem> */}
          <LogoutAction />
        </Menu>
      </div>
    );
  }
}

export default UserMenu;
