import * as React from "react";

import Button from "material-ui/Button";

import { history } from "configureStore";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

type BackButtonProps =
StyledComponentProps;

const BackButton = (props: BackButtonProps) => {
  return (
    <Button raised dense onClick={() => history.goBack()}>&larr; Back</Button>
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(BackButton);
