import * as React from "react";
import { Link } from "react-router-dom";

import Avatar from "material-ui/Avatar";
import Button from "material-ui/Button";
import Card, {CardContent} from "material-ui/Card";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface IUploadedFileProps extends StyledComponentProps {
    title: string;
    subtitle?: string;
    link?: string;
    icon: string;
    remove?: any;
}

const UploadedFile = (props: IUploadedFileProps) => {
    const { title, subtitle, link, icon, remove } = props;

    return (
      <Card elevation={0}>
        <CardContent className={props.classes!.CardContent}>
          <Avatar className={props.classes!.squareAvatar}>
            <img src={require(`../../../assets/images/${icon}.svg`)} alt={title} className={props.classes!.icon} />
          </Avatar>
          <div>
            <h4 className={props.classes!.title}>{title}</h4>
            <h5 className={props.classes!.subtitle}>{subtitle}</h5>
          </div>
          {/* <Button dense onClick={remove} className={props.classes!.removeButton}>Remove</Button> */}
        </CardContent>
      </Card>
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(UploadedFile);
