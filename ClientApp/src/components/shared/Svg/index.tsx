import * as React from "react";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface ISvgProps extends StyledComponentProps {
  image: string;
  className?: any;
}

const Svg = (props: ISvgProps) => {
  return (
    <img className={props.className} src={require(`../../../assets/images/${props.image}.svg`)} alt={props.image} />
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(Svg);
