import * as React from "react";
// import { history } from "configureStore";

import AuthenticatedMainContent from "../AuthenticatedMainContent";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";
import CreateReportListItem from "./CreateReportListItem";

import Button from "material-ui/Button";
import Card, {CardContent} from "material-ui/Card";
import Grid from "material-ui/Grid";
import List from "material-ui/List";
import TextField from "material-ui/TextField";
import * as moment from "moment";
import DateRange from "../shared/DateRange";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

function createReportData(id: number, name: string, elementId: string, medication: boolean, category: boolean) {
  return { id, name, elementId, medication, category };
}

const reportsListData = [
  createReportData(1, "Top Savings", "TopSavings", true, true),
  createReportData(2, "Top Spending", "TopSpending", true, true),
  createReportData(3, "Top Volume", "TopVolume", true, false),
  createReportData(4, "Dispense vs. Purchase", "DispenseVsPurchase", false, false),
  createReportData(5, "Inventory Turns", "InventoryTurns", false, false),
  createReportData(6, "Adjustment Analysis", "AdjustmentAnalysis", false, false),
  createReportData(7, "Discounts", "Discounts", false, false),
  createReportData(8, "Order Fulfillment", "OrderFulfillment", false, false),
  createReportData(9, "Actual Dispenses", "ActualDispenses", false, false),
];

type ReportsProps =
    StyledComponentProps;

const today = moment().format("MM.DD.YYYY");

const CreateReport = (props: ReportsProps) => {
  return(
    <div>
      <TopNav
        title="Create Report"
      />
      <SidebarNav />
      <AuthenticatedMainContent>
        <Grid container spacing={24} justify="center">
          <Grid item sm={12} md={10} lg={8}>
            <Grid container justify="flex-end">
              <Grid item>
                <Button raised className={props.classes!.cancelButton}>Cancel</Button>
                <Button raised color="primary" href="/reports/TopSavings">Finalize Report</Button>
              </Grid>

              <Grid item sm={12}>
                <Card>
                  <CardContent>
                    <TextField
                      id="reportName"
                      label="Report Name"
                      className={props.classes!.nameField}
                      type="text"
                      value={`ClientName-Report-${today}`}
                      fullWidth={true}
                      InputProps={{
                        disableUnderline: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <DateRange/>

                    <List>
                      <CreateReportListItem reports={reportsListData}/>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AuthenticatedMainContent>
    </div>
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(CreateReport);
