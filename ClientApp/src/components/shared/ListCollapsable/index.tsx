import * as React from "react";
import { Link } from "react-router-dom";

import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";
import IconButton from "material-ui/IconButton";
import List, { ListItem } from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface IListCollapsableProps extends StyledComponentProps {
    id: number;
    name: string;
    content?: Element;
}

interface IListCollapsableState {
    open: boolean;
}

class ListCollapsable extends React.Component<IListCollapsableProps, IListCollapsableState> {

    constructor(props: any) {
        super(props);
        this.state = {open: true};
    }

    public handleClick = () => {
        this.setState({ open: !this.state.open });
    }

    public render() {
        return (
            <List>
                <ListItem className={this.props.classes!.ListItemWithButton}>
                  <Link
                    to={`group/${this.props.id}`}
                    className={this.props.classes!.ListItemWithButtonLink}
                  >
                    {this.props.name}
                  </Link>

                    <IconButton onClick={() => this.handleClick()}>
                      {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                </ListItem>

                <Collapse in={this.state.open} unmountOnExit>
                  {this.props.content}
                </Collapse>
            </List>
        );
    }
}

export default withStyles<IStyles["classes"]>(styleSheet)(ListCollapsable);
