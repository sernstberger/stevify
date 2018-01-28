import * as React from "react";

import Checkbox from "material-ui/Checkbox";
import { FormControlLabel} from "material-ui/Form";
import Grid from "material-ui/Grid";
import { ListItem } from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

interface IListCollapsableProps extends StyledComponentProps {
    id: number;
    name: string;
    content?: Element;
    disableGutters?: boolean;
}

interface IListCollapsableState {
    open: boolean;
}

class ListCollapsable extends React.Component<IListCollapsableProps, IListCollapsableState> {

    constructor(props: any) {
        super(props);
        this.state = {open: false};
    }

    public handleClick = () => {
        this.setState({ open: !this.state.open });
    }

    public render() {
      return (

            <div>
              { this.props.disableGutters ?
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={this.state.openNot}
                        value={this.props.name}
                        onChange={() => this.handleClick()}
                      />
                    }
                    label={this.props.name}
                  />
                  <Collapse in={this.state.open} unmountOnExit className={this.props.classes!.insetCollapse}>
                    {this.props.content}
                  </Collapse>
                </Grid>
              :
                <ListItem disableGutters>
                  <Grid container>
                    <Grid item xs={12}>
                      <label className={this.props.classes!.label}>
                        <Checkbox
                          // checked={this.state.openNot}
                          value={this.props.name}
                          onChange={() => this.handleClick()}
                        />
                        <div className={this.props.classes!.largeText}>
                          {this.props.name}
                        </div>
                      </label>
                    </Grid>
                    <Collapse in={this.state.open} unmountOnExit className={this.props.classes!.collapse}>
                      {this.props.content}
                    </Collapse>
                  </Grid>
                </ListItem>
              }
            </div>

      );
  }
}

export default withStyles<IStyles["classes"]>(styleSheet)(ListCollapsable);
