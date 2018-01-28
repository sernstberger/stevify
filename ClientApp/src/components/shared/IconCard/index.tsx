import * as React from "react";
import { Link } from "react-router-dom";

import Avatar from "material-ui/Avatar";
import Card, {CardContent} from "material-ui/Card";
import Grid from "material-ui/Grid";
import IconButton from "material-ui/IconButton";
import { ListItemText } from "material-ui/List";

// icons
import MoreHorizIcon from "material-ui-icons/MoreHoriz";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface IIconCardProps extends StyledComponentProps {
    title: string;
    subtitle?: string;
    link: string;
    icon: string;
    menu?: JSX.Element;
    disabled?: boolean;
}

const IconCard = (props: IIconCardProps) => {
    const { title, subtitle, link, icon, menu, disabled } = props;

    return (
      <Card className={disabled ? props.classes!.disabled : ""}>
        <Link to={link} className={props.classes!.Link}>
          <CardContent className={props.classes!.CardContent}>
            <Avatar className={props.classes!.squareAvatar}>
              <img src={require(`../../../assets/images/${icon}.svg`)} alt={title} className={props.classes!.icon} />
            </Avatar>
            <ListItemText
              primary={title}
              secondary={subtitle}
            />
            { menu &&
              <IconButton aria-label="Delete">
                <MoreHorizIcon />
              </IconButton>
            }
          </CardContent>
        </Link>
      </Card>
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(IconCard);
