import * as React from "react";
import {
  Route,
  RouteComponentProps,
} from "react-router";
import { Layout } from "../components/Layout";
import AuthenticatedContainer from "./AuthenticatedContainer";

import Group from "../components/Group";
import Home from "../components/Home";
import Login from "../components/Login";
import NewClient from "../components/Prospect/new";
import UploadAdjustmentAnalysis from "../components/Prospect/UploadAdjustmentAnalysis";
import UploadAdjustmentAnalysisWaiting from "../components/Prospect/UploadAdjustmentAnalysisWaiting";
import Reports from "../components/Reports";
import ActualDispenses from "../components/Reports/ActualDispenses";
import AdjustmentAnalysis from "../components/Reports/AdjustmentAnalysis";
import AdjustmentAnalysisList from "../components/Reports/AdjustmentAnalysisList";
import CreateReport from "../components/Reports/CreateReport";
import InventoryTurns from "../components/Reports/InventoryTurns";
import OrderFulfillment from "../components/Reports/OrderFulfillment";
import TopSavings from "../components/Reports/TopSavings";

import NotificationsContainer from "../containers/NotificationsContainer";

import { MuiThemeProvider } from "material-ui/styles";
import defaultTheme from "../assets/styles/themes";

export const routes = <MuiThemeProvider theme={defaultTheme}>
    <Layout>
      <NotificationsContainer />
      <Route exact path="/login" component={ Login } />

      <Route render={(authRouteProps: RouteComponentProps<any>) =>
        <AuthenticatedContainer {...authRouteProps}>
          <Route exact path="/" component={ Home } />
          <Route path="/group/:id" component={ Group } />

          <Route path="/prospect/new" component={ NewClient } />

          <Route path="/client/:id/dashboard" component={ Group } />

          <Route exact path="/client/:id/reports" component={ Reports } />

          <Route path="/client/:id/reports/AdjustmentAnalysis" component={ AdjustmentAnalysis } />
          <Route path="/client/:id/reports/UploadAdjustmentAnalysis" component={ UploadAdjustmentAnalysis } />
          <Route path="/client/:id/reports/UploadAdjustmentAnalysisWaiting" component={ UploadAdjustmentAnalysisWaiting } />
          <Route path="/client/:id/reports/AdjustmentAnalysisList" component={ AdjustmentAnalysisList } />

          <Route path="/client/:id/reports/CreateReport" component={ CreateReport } />
          <Route path="/client/:id/reports/TopSavings" component={ TopSavings } />
          <Route path="/client/:id/reports/ActualDispenses" component={ ActualDispenses } />
          <Route path="/client/:id/reports/InventoryTurns" component={ InventoryTurns } />
          <Route path="/client/:id/reports/OrderFulfillment" component={ OrderFulfillment } />
        </AuthenticatedContainer>
      }/>
    </Layout>
</MuiThemeProvider>;
