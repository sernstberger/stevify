import * as React from "react";

import TextField from "material-ui/TextField";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

interface ITextAreaWithCounterProps extends StyledComponentProps {
  id: string;
  name?: string;
}

const counterNumber = 250;

class TextAreaWithCounter extends React.Component<ITextAreaWithCounterProps> {

  constructor(props: any) {
    super(props);
  }

  public characterCount = (id: string) => {
    const counter = (document.getElementById(`${id}Counter`) as HTMLTextAreaElement);
    const textAreaText = (document.getElementById(id) as HTMLTextAreaElement);
    const remainingCharacters = counterNumber - textAreaText!.value.length;
    counter!.innerHTML = remainingCharacters.toString();
  }

  public render() {
      return (
        <div style={{position: "relative"}}>
          <TextField
            id={this.props.id}
            label="Analysis Summary"
            placeholder="Summary details about this report…"
            type="text"
            multiline={true}
            rows={5}
            className={this.props.classes!.formControlLabel}
            onKeyUp={ () => this.characterCount( this.props.id ) }
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <div
            id={`${this.props.id}Counter`}
            className={this.props.classes!.counter}
          >
            {counterNumber}
          </div>
        </div>
      );
  }
}

export default withStyles<IStyles["classes"]>(styleSheet)(TextAreaWithCounter);
