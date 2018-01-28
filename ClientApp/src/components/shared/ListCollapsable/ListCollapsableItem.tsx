import * as React from "react";

import { history } from "configureStore";

import { ListItem } from "material-ui/List";
import Kabob from "../Kabob";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface IListCollapsableItemProps extends StyledComponentProps {
    id: number;
    name: string;
    groupId: number;
    active?: boolean;
}

class ListCollapsableItem extends React.Component<IListCollapsableItemProps> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
          <ListItem className={this.props.classes!.InsetListItem}>
            <div
              className={this.props.classes!.InsetListItemLink}
              onClick={() => history.push(`group/${this.props.groupId}/client/${this.props.id}`)}
            >
              {this.props.name}
            </div>
            { !this.props.active &&
              <Kabob />
            }
          </ListItem>
        );
    }
}

export default withStyles<IStyles["classes"]>(styleSheet)(ListCollapsableItem);
