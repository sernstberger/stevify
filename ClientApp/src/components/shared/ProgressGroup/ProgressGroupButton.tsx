import * as React from "react";
import { Link } from "react-router-dom";

import Button from "material-ui/Button";
// import Card, {CardContent} from "material-ui/Card";
// import Grid from "material-ui/Grid";
// import IconButton from "material-ui/IconButton";
// import { ListItemText } from "material-ui/List";

// icons
import MoreHorizIcon from "material-ui-icons/MoreHoriz";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface IProgressGroupButtonProps extends StyledComponentProps {
    title: string;
    selected: string;
    onClick: any;
}

const ProgressGroupButton = (props: IProgressGroupButtonProps) => {
    const { title, selected, onClick } = props;

    return (
      selected === title ? (
        <Button raised className={props.classes!.activeButton}>{title}</Button>
      ) : (
        <Button
          className={props.classes!.button}
          onClick={onClick}
        >
          {title}
        </Button>
      )
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(ProgressGroupButton);
