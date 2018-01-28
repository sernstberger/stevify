import * as React from "react";

import { history } from "configureStore";

import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import AuthenticatedMainContent from "../AuthenticatedMainContent";
import Paper from "material-ui/Paper";
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table";
import BackButton from "../shared/BackButton";
import DateRange from "../shared/DateRange";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

let id = 0;
function createData(
  header: string,
  mtd: number,
  ytd: number,
  lifetime: number,
) {
  id += 1;
  return { id, header, mtd, ytd, lifetime };
}

const fulfillmentData = [
  createData("Shipped", 1000, 10000, 150000),
  createData("Filled", 1000, 5000, 15000),
  createData("Ordered", 900, 5000, 15000),
  createData("Backordered", 100, 600, 1600),
  createData("Fill Rate", 90, 95, 95),
];

type ReportsProps =
    StyledComponentProps;

const Reports = (props: ReportsProps) => {
  return(
    <div>
      <TopNav
        title="Order Fulfillment"
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
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Month To Date</TableCell>
                    <TableCell>Year To Date</TableCell>
                    <TableCell>Lifetime</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fulfillmentData.map((f) =>
                    <TableRow key={f.id}>
                      <TableCell><strong>{f.header}</strong></TableCell>
                      <TableCell>{f.mtd}</TableCell>
                      <TableCell>{f.ytd}</TableCell>
                      <TableCell>{f.lifetime}</TableCell>
                    </TableRow>,
                  )}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </AuthenticatedMainContent>
    </div>
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(Reports);
