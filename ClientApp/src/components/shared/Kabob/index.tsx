import * as React from "react";

// import { history } from "configureStore";

import MoreVertIcon from "material-ui-icons/MoreVert";
import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from "material-ui/Menu";

const options = [
  // "Edit",
  // "Archive",
  "Options go here",
];

// const ITEM_HEIGHT = 48;

class LongMenu extends React.Component {
  public state = {
    anchorEl: undefined,
  };

  public handleClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  public handleRequestClose = () => {
    this.setState({ anchorEl: undefined });
  }

  public render() {
    const open = Boolean(this.state.anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? "long-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={{height: 24, width: 24}}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={open}
          onClose={this.handleRequestClose}
          PaperProps={{
            style: {
              // maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} onClick={this.handleRequestClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default LongMenu;
// export default withStyles<IStyles["classes"]>(styleSheet)(BackButton);
