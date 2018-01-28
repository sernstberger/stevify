import * as React from "react";

import { history } from "configureStore";

import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "material-ui/Dialog";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface ICancelButtonProps extends StyledComponentProps {
    navigateTo: any;
    validation: any;
    // name: string;
    // content?: Element;
}

interface ICancelButtonState {
    open: boolean;
}

class CancelButton extends React.Component<ICancelButtonProps, ICancelButtonState> {

  constructor(props: any) {
    super(props);
    this.state = {open: false};
  }

  public handleClickOpen = () => {
    this.props.validation
    ? this.setState({ open: true })
    : this.navigateAway();
  }

  public handleClose = () => {
    this.setState({ open: false });
  }

  public navigateAway = () => {
    history.push(this.props.navigateTo);
  }

  public render() {
    return (
      <div>
        <Button raised onClick={this.handleClickOpen}>Cancel</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sure you want to cancel?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you cancel, you will lose any data you've entered for this prospect.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              No
            </Button>
            <Button raised onClick={this.navigateAway} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles<IStyles["classes"]>(styleSheet)(CancelButton);
