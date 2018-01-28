import * as React from "react";

import TextField from "material-ui/TextField";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

interface ILoginInputProps extends StyledComponentProps {
  id: string;
  label: string;
  value: string;
  onChange: any;
  type: string;
  onKeyUp?: any;
}

const LoginInput = (props: ILoginInputProps) => {
  const { id, label } = props;

  return (
    <TextField
      id={id}
      className={props.classes!.textField}
      label={label}
      fullWidth={true}
      InputLabelProps={{
          shrink: true,
          className: props.classes!.textFieldFormLabel,
      }}
      InputProps={{
        type: `${props.type}`,
          disableUnderline: true,
          classes: {
            root: props.classes!.textFieldRoot,
            input: props.classes!.textFieldInput,
          },
      }}
      value={props.value}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
    />
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(LoginInput);
