import * as React from "react";
import { Link } from "react-router-dom";

import Card, {CardContent} from "material-ui/Card";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface IDropzoneBoxProps extends StyledComponentProps {
    title: string;
    // subtitle?: string;
    // link?: string;
    icon: string;
}

const DropzoneBox = (props: IDropzoneBoxProps) => {
    const { title, icon } = props;

    return (
      <div>
        <img
          src={`/assets/images/${icon}.svg`}
          alt="upload"
          className={props.classes!.uploadImg}
        />
        <span className={props.classes!.uploadText}>{title}</span>
      </div>
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(DropzoneBox);
