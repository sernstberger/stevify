import * as React from "react";

import { history } from "configureStore";

import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import { TableCell, TableFooter, TableRow } from "material-ui/Table";
import AuthenticatedMainContent from "../AuthenticatedMainContent";
import ReportTable from "../Reports/ReportTable";
import BackButton from "../shared/BackButton";
// import DateRange from "../shared/DateRange";
import { money } from "../shared/helpers";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

const columnData = [
  { id: "medication", numeric: false, label: "Medication", sortable: true },
  { id: "quantity", numeric: true, label: "Quantity", sortable: true },
  { id: "current", numeric: true, label: "Current", sortable: true },
  { id: "distributionAndMail", numeric: true, label: "Distribution & Mail", sortable: false },
  { id: "mail", numeric: true, label: "Mail", sortable: false },
];

let id = 0;
function createData(medication: string, quantity: number, current: number, distributionAndMail: number, mail: number) {
  id += 1;
  return { id, medication, quantity, current, distributionAndMail, mail };
}

const drugData = [
  createData("Naproilt", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Ocgenenate", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Cinlorgra", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Lunco", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Qlquo", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Caltholed", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Ses", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Catldexmed", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Trinyxsis", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Diquoku", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Akuym", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Minixed", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Aclicilry", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Redthuare", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Altiqua", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Terdrielon", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Hopre", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Evocilore", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Ceine", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Analcilcam", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Qbixxar", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
  createData("Maca", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), 250, 467),
];

// Add all the current $s
const sum = (a: any) => a.reduce((n: any, x: any) => n + x);
const totalAmount = sum(drugData.map((x: any) => Number(x.current)));

type ReportsProps =
    StyledComponentProps;

const Reports = (props: ReportsProps) => {
  return(
    <div>
      <TopNav
        title="Adjustment Analysis"
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
              style={{position: "sticky", top: 100}}
            >
              + Create Report
            </Button>
          </Grid>
          {/* <Grid item xs={12}>
            <DateRange />
          </Grid> */}
          <Grid item xs={12}>
            <ReportTable
              tableName="AdjustmentAnalysis"
              columnData={columnData}
              tableData={drugData}
            >
              <TableFooter>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell></TableCell>
                  <TableCell numeric>{money(totalAmount)}</TableCell>
                  <TableCell numeric>{money(345)}</TableCell>
                  <TableCell numeric>{money(435843)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cost Savings</TableCell>
                  <TableCell></TableCell>
                  <TableCell numeric>-</TableCell>
                  <TableCell numeric>{money(2345)}</TableCell>
                  <TableCell numeric>{money(348957)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>% Savings</TableCell>
                  <TableCell></TableCell>
                  <TableCell numeric>-</TableCell>
                  <TableCell numeric>34%</TableCell>
                  <TableCell numeric>44%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>% Match</TableCell>
                  <TableCell></TableCell>
                  <TableCell numeric>-</TableCell>
                  <TableCell numeric>55%</TableCell>
                  <TableCell numeric>44%</TableCell>
                </TableRow>
              </TableFooter>
            </ReportTable>
          </Grid>
        </Grid>
      </AuthenticatedMainContent>
    </div>
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(Reports);
