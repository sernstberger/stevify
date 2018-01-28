import * as React from "react";

import { history } from "configureStore";

import AuthenticatedMainContent from "../AuthenticatedMainContent";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";

import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import IconCard from "../shared/IconCard";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

function createReportData(id: number, name: string, icon: string, disabled: boolean, link?: string) {
  return { id, name, icon, disabled, link };
}

const reportsData = [
  createReportData(1, "Top Savings", "TopSavings", false),
  createReportData(2, "Top Spending", "TopSpending", false),
  createReportData(3, "Top Volume", "TopVolume", false),
  createReportData(4, "Dispense vs. Purchase", "DispenseVsPurchase", false),
  createReportData(5, "Inventory Turns", "InventoryTurns", true),
  createReportData(6, "Adjustment Analysis", "AdjustmentAnalysis", true, "List"),
  createReportData(7, "Discounts", "Discounts", true),
  createReportData(8, "Order Fulfillment", "OrderFulfillment", true),
  createReportData(9, "Actual Dispenses", "ActualDispenses", true),
];

type ReportsProps =
    StyledComponentProps;

const Reports = (props: ReportsProps) => {
  return(
    <div>
      <TopNav
        title="Reports"
      />
      <SidebarNav active="Reports" />
      <AuthenticatedMainContent>
        <Grid container justify="flex-end">
          <Grid item>
            <Button
              raised
              color="primary"
              onClick={() => history.push("/reports/CreateReport")}
            >
              + Create report
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          {reportsData.map((statItem: any) => {
            return (
              <Grid key={statItem.id} item xs={6} md={4}>
                <IconCard
                  icon={statItem.icon}
                  title={statItem.name}
                  link={`reports/${statItem.icon}${statItem.link}`}
                />
              </Grid>
            );
          })}
        </Grid>
      </AuthenticatedMainContent>
    </div>
  );
};

export default withStyles<IStyles["classes"]>(styleSheet)(Reports);
