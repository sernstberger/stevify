import * as React from "react";

import { history } from "configureStore";

import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import AuthenticatedMainContent from "../AuthenticatedMainContent";
import LoadingSpinner from "../shared/LoadingSpinner";
import PaddedCard from "../shared/PaddedCard";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";

interface IUploadAdjustmentAnalysisWaitingProps {
  // things?: boolean;
}

// will add function that automatically takes you to the next page
// window.setTimeout(function(){
//   // Move to a new location or you can do something else
//   history.push("/");
// }, 5000);

const UploadAdjustmentAnalysisWaiting = (props: IUploadAdjustmentAnalysisWaitingProps) => {
  return (
    <div>
      <TopNav title="Create Prospect"/>
      <AuthenticatedMainContent noSidebar={true}>
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
            <PaddedCard
              title="Creating Adjustment Analysis..."
              body={ <LoadingSpinner />}
            />
            <Button raised onClick={() => history.push("/Reports/AdjustmentAnalysisList")}>Continue (temporary)</Button>
          </Grid>
        </Grid>
      </AuthenticatedMainContent>
    </div>
  );
};

export default UploadAdjustmentAnalysisWaiting;
