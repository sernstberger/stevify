import * as React from "react";

import Button from "material-ui/Button";
import Card, {CardContent} from "material-ui/Card";
import { FormControl, FormControlLabel, FormGroup, FormLabel } from "material-ui/Form";
import Radio, { RadioGroup } from "material-ui/Radio";
import Switch from "material-ui/Switch";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import * as moment from "moment";
import CardHeaderWithAction from "../shared/CardHeaderWithAction";
import DateField from "../shared/DateField";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

type RightSidebarProps =
    StyledComponentProps;

interface IRightSidebarState {
  value: string;
}

const startOfThisMonth = moment().startOf("month").format("YYYY-MM-DD");

class RightSidebar extends React.Component<RightSidebarProps, IRightSidebarState> {

  constructor(props: any) {
    super(props);
    this.state = {value: ""};
  }

  public handleClick = (event: any, value: string) => {
    this.setState({ value });
  }

  public render() {
    return (
      <Card className={this.props.classes!.RightSidebar}>
        <CardHeaderWithAction
          title="Monthly Auto-Reporting"
          typographyType="subheading"
          action={
            <FormGroup className={this.props.classes!.switchWrapper}>
              <FormControlLabel
                className={this.props.classes!.noMargin}
                control={
                  <Switch
                    // checked={this.state.checkedA}
                    // onChange={(event, checked) => checkActive(checked)}
                  />
                }
                label={false}
              />
            </FormGroup>
          }
        />
        <CardContent>
        <TextField
            id="email"
            label="Email"
            type="text"
            InputProps={{
              disableUnderline: true,
            }}
            fullWidth={true}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button dense color="primary">+ Add Another Email</Button>

          <br/>

          <FormControl component="fieldset" className={this.props.classes!.formControl}>
            <FormLabel className={this.props.classes!.formLabel}>Notify People On</FormLabel>
            <RadioGroup
              aria-label="Notify People On"
              className={this.props.classes!.group}
              value={this.state.value}
              onChange={this.handleClick}
            >
              <FormControlLabel value="month" control={<Radio />} label="day of the month" />
              <FormControlLabel value="week" control={<Radio />} label="day of the week" />
            </RadioGroup>
          </FormControl>

          <DateField
            id="startsOnSidebar"
            label="Starts On"
            defaultValue={startOfThisMonth}
          />
          <br />
          <br />
          <Typography type="caption">
            <img src={require("../../assets/images/MiniCheckMark.svg")} alt="things" />
            <span style={{marginLeft: 5}}>Summary: Monthly on day 1</span>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles<IStyles["classes"]>(styleSheet)(RightSidebar);
