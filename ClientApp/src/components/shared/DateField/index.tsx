import * as React from "react";

import TextField from "material-ui/TextField";

// icons
import DateRangeIcon from "material-ui-icons/DateRange";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface IDateFieldProps extends StyledComponentProps {
    id: string;
    label: string;
    defaultValue?: string;
}

const DateField = (props: IDateFieldProps) => {
    const { id, label, defaultValue } = props;

    return (
      <TextField
        id={id}
        label={label}
        type="date"
        onClick={ () => document.getElementById(id)!.focus()}
        defaultValue={defaultValue}
        fullWidth={true}
        InputProps={{
          className: props.classes!.dateField,
          disableUnderline: true,
          endAdornment: <div className={props.classes!.adornment}><DateRangeIcon /></div>,
        }}
        className={props.classes!.date}
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(DateField);
