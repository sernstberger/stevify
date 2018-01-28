import * as React from "react";

import { history } from "configureStore";
import { connect, Dispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { IApplicationState } from "../../store";
import * as claimActions from "../../store/claims/actions";

import Button from "material-ui/Button";
import { DialogActions } from "material-ui/Dialog";
import Grid from "material-ui/Grid";
import { MenuItem } from "material-ui/Menu";
import TextField from "material-ui/TextField";
import AuthenticatedMainContent from "../AuthenticatedMainContent";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";

import CancelButton from "../shared/CancelButton";
import DropzoneArea from "../shared/DropzoneArea";
import PaddedCard from "../shared/PaddedCard";

interface IReduxStateProps {
  claim: any;
}

interface IClaimState {
  files: any;
}

interface IReduxDispatchProps {
  beingCreatedClaim: (claim: any) => void;
  createClaim: () => void;
  hydrateClaimsAsync: () => void;
}

type ClaimProps =
& RouteComponentProps<{}>
& IReduxStateProps
& IReduxDispatchProps;

let resultInt = "";

class UploadAdjustmentAnalysis extends React.Component<ClaimProps, IClaimState> {

  constructor(props: ClaimProps) {
    super(props);
    this.state = { files: [] };
  }

  public componentWillMount() {
    const parts = window.location.pathname;
    const regexp = /(?:client\/)(\d+)/i;
    const result = parts.match( regexp );
    resultInt = result![1];
  }

  public onDrop(files: any) {
    this.setState({
      files,
    });
  }

  public render() {
    const {
      createClaim,
      // updateClaimBeingCreated,
      beingCreatedClaim,
    } = this.props;

    return <div>
      <TopNav title="Create Prospect"/>
      <AuthenticatedMainContent noSidebar={true}>
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
              <PaddedCard
                  title="Claim File (Adjustment Analysis)"
                  body={
                    <DropzoneArea
                      beingCreatedClaim={beingCreatedClaim}
                      clientId={resultInt}
                    />
                  }
                  action={
                    <DialogActions>
                      <Button raised href="/">
                        Cancel
                      </Button>

                      <Button
                        raised
                        color="primary"
                        onClick={() => createClaim()}
                      >
                        Create Analysis
                      </Button>
                    </DialogActions>
                  }
              />
          </Grid>
        </Grid>
      </AuthenticatedMainContent>
    </div>;
  }
}

const mapStateToProps = (state: IApplicationState): IReduxStateProps => {
  return {
    claim: state.claims.beingCreatedClaim,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<() => void>,
                            ownProps: ClaimProps): IReduxDispatchProps => ({
                              beingCreatedClaim: (claim) =>
                                dispatch(claimActions.updateClaimBeingCreated({claim})),
                              createClaim: () => dispatch(claimActions.createClaim()),

                              hydrateClaimsAsync: () =>
                                dispatch(claimActions.hydrateClaimsAsync(parseInt(resultInt, 10))),
                            });

export default connect<IReduxStateProps, IReduxDispatchProps, ClaimProps>
  (mapStateToProps, mapDispatchToProps)(UploadAdjustmentAnalysis);
