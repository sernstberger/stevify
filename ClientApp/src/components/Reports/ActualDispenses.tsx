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
  { id: "quantity", numeric: true, label: "Quantity", sortable: true },
  { id: "price", numeric: true, label: "Price", sortable: true },
  { id: "category", numeric: false, label: "Category", sortable: true },
  { id: "transactionDate", numeric: false, label: "Transaction Date", sortable: true },
  { id: "salesOrderNumber", numeric: true, label: "Sales Order Number", sortable: false },
];

let id = 0;
function createData(
  medication: string,
  quantity: number,
  price: number,
  category: string,
  transactionDate: string,
  salesOrderNumber: number,
) {
  id += 1;
  return { id, medication, quantity, price, category, transactionDate, salesOrderNumber };
}

const drugData = [
  createData("Naproilt", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Ocgenenate", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Hormone", "09/01/2016", 2343),
  createData("Cinlorgra", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Anti-Diabetic", "09/01/2017", 2343),
  createData("Lunco", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Anti-Inflamatory", "09/01/2016", 2343),
  createData("Qlquo", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Caltholed", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Inflamatory", "10/01/2017", 2343),
  createData("Ses", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "10/02/2017", 2343),
  createData("Catldexmed", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Blahhhhs", "09/01/2016", 2343),
  createData("Trinyxsis", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Diquoku", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Akuym", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Minixed", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Aclicilry", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Redthuare", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Altiqua", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Zooooobooos", "09/01/2016", 2343),
  createData("Terdrielon", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Hopre", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Evocilore", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Ceine", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Xzynx", "09/01/2016", 2343),
  createData("Analcilcam", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Qbixxar", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
  createData("Maca", Math.floor((Math.random() * 10000) + 500), Math.floor((Math.random() * 80000) + 10000), "Cholesterol", "09/01/2016", 2343),
];

type ReportsProps =
    StyledComponentProps;

const Reports = (props: ReportsProps) => {
  return(
    <div>
      <TopNav
        title="Actual Dispenses"
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
              tableName="ActualDispenses"
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
