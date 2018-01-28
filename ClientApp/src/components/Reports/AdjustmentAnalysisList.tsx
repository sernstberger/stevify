import * as React from "react";

import { history } from "configureStore";
import { connect, Dispatch } from "react-redux";

import AuthenticatedMainContent from "../AuthenticatedMainContent";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";

import Button from "material-ui/Button";
import Card, {CardContent} from "material-ui/Card";
import Grid from "material-ui/Grid";
import AdjustmentAnalysisListItem from "../shared/AdjustmentAnalysisListItem";
import {sort} from "../shared/helpers";

import { ClaimSummaryDto } from "../../infrastructure/api";
import { IApplicationState } from "../../store";
import * as claimActions from "../../store/claims/actions";

interface IReduxStateProps {
  allClaims: ClaimSummaryDto[];
}

interface IReduxDispatchProps {
  hydrateClaimsAsync: (clientId: number) => void;
}

type ClaimProps =
& IReduxStateProps
& IReduxDispatchProps;

let resultInt = "";

export class Reports extends React.Component<ClaimProps, {}> {

  public displayClaims(claims: ClaimSummaryDto[]) {

    if (claims.length) {
      return sort(claims, "date", "DESC").map((statItem) => {
        return (
          <Grid item xs={12} key={statItem.id}>
            { statItem.status === "ProcessingQueued" ?
              <AdjustmentAnalysisListItem
                title={statItem.name}
                link="#"
                status={statItem.status}
                statusText={statItem.statusText}
                dateTime={statItem.date}
              />
            :
              <AdjustmentAnalysisListItem
                title={statItem.name}
                // link={`/reports/${item.icon}`}
                link="#"
                status={statItem.status}
                statusText={statItem.statusText}
                dateTime={statItem.date}
              />
            }
          </Grid>
        );
      });
    } else {
      return (
        <Grid item xs={12}>
          <Card>
            <CardContent>
              You haven't uploaded any claims yet.
            </CardContent>
          </Card>
        </Grid>
      );
    }
  }

  public componentWillMount() {
    const parts = window.location.pathname;
    const regexp = /(?:client\/)(\d+)/i;
    const result = parts.match( regexp );
    resultInt = result![1];
    this.props.hydrateClaimsAsync(parseInt(resultInt, 10));
  }

  public render() {
    return(
      <div>
        <TopNav
          title="Reports"
        />
        <SidebarNav active="Reports" />
        <AuthenticatedMainContent>
          <Grid container justify="center">
            <Grid item xs={12} md={8} lg={6}>
              <Button
                raised
                color="primary"
                onClick={() => history.push(`/client/${resultInt}/reports/UploadAdjustmentAnalysis`)}
                style={{marginBottom: 16, width: "100%"}}
              >
                + Create new adjustment analysis
              </Button>

              <Grid container justify="center">
                { this.displayClaims(this.props.allClaims) }
              </Grid>
            </Grid>
          </Grid>
        </AuthenticatedMainContent>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState): IReduxStateProps => {
    return {
      allClaims: state.claims.list.all,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<() => void>,
                            ownProps: ClaimProps): IReduxDispatchProps => ({
    hydrateClaimsAsync: (clientId: number) => dispatch(claimActions.hydrateClaimsAsync(clientId)),
});

export default connect<IReduxStateProps, IReduxDispatchProps, ClaimProps>
  (mapStateToProps, mapDispatchToProps)(Reports);
