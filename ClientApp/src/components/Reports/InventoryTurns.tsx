import * as React from "react";

import { history } from "configureStore";

import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import AuthenticatedMainContent from "../AuthenticatedMainContent";
import ReportTable from "../Reports/ReportTable";
import BackButton from "../shared/BackButton";
import DateRange from "../shared/DateRange";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

const columnData = [
  { id: "medication", numeric: false, label: "Medication", sortable: true },
  { id: "yourClinic", numeric: true, label: "Your Clinic", sortable: true },
  { id: "benchmark", numeric: true, label: "Benchmark", sortable: true },
];

let id = 0;
function createData(
  medication: string,
  yourClinic: number,
  benchmark: number,
) {
  id += 1;
  return { id, medication, yourClinic, benchmark };
}

const drugData = [
  createData("Naproilt", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Ocgenenate", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Cinlorgra", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Lunco", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Qlquo", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Caltholed", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Ses", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Catldexmed", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Trinyxsis", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Diquoku", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Akuym", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Minixed", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Aclicilry", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Redthuare", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Altiqua", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Terdrielon", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Hopre", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Evocilore", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Ceine", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Analcilcam", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Qbixxar", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
  createData("Maca", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000)),
];

type ReportsProps =
    StyledComponentProps;

const Reports = (props: ReportsProps) => {
  return(
    <div>
      <TopNav
        title="Inventory Turns"
      />
      <SidebarNav />
      <AuthenticatedMainContent>
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
            <ReportTable
              tableName="InventoryTurns"
              columnData={columnData}
              tableData={drugData}
            >
            </ReportTable>
          </Grid>
        </Grid>
      </AuthenticatedMainContent>
    </div>
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(Reports);
