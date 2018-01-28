import * as React from "react";

import Grid from "material-ui/Grid";
import DateField from "../DateField";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

import * as moment from "moment";

interface IDateRangeProps extends StyledComponentProps {
    key?: number;
}
const startOfLastMonth = moment().subtract(1, "month").startOf("month").format("YYYY-MM-DD");
const endOfLastMonth = moment().subtract(1, "month").endOf("month").format("YYYY-MM-DD");

const DateRange = (props: IDateRangeProps) => {
  // const { key } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={12} md={6} lg={4}>
        <DateField
          id="startsOn"
          label="Starts On"
          defaultValue={startOfLastMonth}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <DateField
          id="endsOn"
          label="Ends On"
          defaultValue={endOfLastMonth}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(DateRange);
