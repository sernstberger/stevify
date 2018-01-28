import * as React from "react";

import {CardContent} from "material-ui/Card";
import Typography from "material-ui/Typography";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface ICardHeaderWithActionProps extends StyledComponentProps {
    title: string;
    action?: JSX.Element;
    typographyType?: string;
}

const CardHeaderWithAction = (props: ICardHeaderWithActionProps) => {
  const { title, action, typographyType } = props;

  return (
    <CardContent className={props.classes!.root}>
        { typographyType === "subheading" ? (
          <Typography type="subheading">{title}</Typography>
        ) : (
          <Typography type="headline">{title}</Typography>
        )}
        {action}
    </CardContent>
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(CardHeaderWithAction);
