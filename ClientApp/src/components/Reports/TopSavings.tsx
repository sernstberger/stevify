import * as React from "react";

import { history } from "configureStore";

import AuthenticatedMainContent from "../AuthenticatedMainContent";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";
import RightSidebar from "./RightSidebar";

import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import BackButton from "../shared/BackButton";
import DateRange from "../shared/DateRange";
import ProgressGroup from "../shared/ProgressGroup";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

function createData(id: number, name: string, amountNumber: number, amountPercentage: number) {
  return { id, name, amountNumber, amountPercentage };
}

let topSavingsMedicationData = [
  createData(1, "Frozen yoghurt", 159, 6.0),
  createData(2, "Ice cream sandwich", 237, 9.0),
  createData(3, "Eclair", 262, 16.0),
  createData(4, "Cupcake", 305, 3.7),
  createData(5, "Gingerbread", 356, 36.0),
  createData(6, "Frozen yoghurt", 159, 86.0),
  createData(7, "Ice cream sandwich", 237, 9.0),
  createData(8, "Eclair", 262, 16.0),
  createData(9, "Cupcake", 305, 93.7),
  createData(10, "Gingerbread", 356, 36.0),
  createData(11, "Frozen yoghurt", 159, 6.0),
  createData(12, "Ice cream sandwich", 237, 9.0),
  createData(13, "Eclair", 262, 16.0),
  createData(14, "Cupcake", 305, 3.7),
  createData(15, "Gingerbread", 356, 36.0),
];

let topSavingsCategoryData = [
  createData(1, "Frozen yoghurt", 59, 46.0),
  createData(2, "Ice cream sandwich", 1237, 49.0),
  createData(3, "Eclair", 262, 16.0),
  createData(4, "Cupcake", 305, 3.7),
  createData(5, "Gingerbread", 356, 36.0),
  createData(6, "Frozen yoghurt", 159, 6.0),
  createData(7, "Ice cream sandwich", 237, 19.0),
  createData(8, "Eclair", 262, 16.0),
  createData(9, "Cupcake", 305, 63.7),
  createData(10, "Gingerbread", 356, 36.0),
  createData(11, "Frozen yoghurt", 159, 6.0),
  createData(12, "Ice cream sandwich", 237, 9.0),
  createData(13, "Eclair", 262, 16.0),
  createData(14, "Cupcake", 305, 3.7),
  createData(15, "Gingerbread", 356, 36.0),
];

topSavingsMedicationData = topSavingsMedicationData.slice(0, 10);
topSavingsCategoryData = topSavingsCategoryData.slice(0, 10);

type ReportsProps =
    StyledComponentProps;

const Reports = (props: ReportsProps) => {
  return(
    <div>
      <TopNav
        title="Top Savings"
      />
      <SidebarNav />
      <AuthenticatedMainContent>
        <div className={props.classes!.withRightSidebar}>
          <Grid container spacing={24} justify="space-between">
            <Grid item>
              <BackButton />
            </Grid>
            <Grid item>
              <Button
                raised
                color="primary"
                onClick={() => history.push("/reports/CreateReport")}
              >
                + Create Report
              </Button>
            </Grid>
            <Grid item xs={12}>
              <DateRange />
            </Grid>
            <Grid item xs={12}>
              <ProgressGroup
                title=""
                topMedicationItems={topSavingsMedicationData}
                topCategoryItems={topSavingsCategoryData}
              />
            </Grid>
          </Grid>
        </div>
        <RightSidebar />
      </AuthenticatedMainContent>
    </div>
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(Reports);
