import * as React from "react";

import { history } from "configureStore";
import { connect, Dispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { ClientDto } from "../../infrastructure/api";
import { IApplicationState } from "../../store";
import * as clientGroupActions from "../../store/clientGroups/actions";
import * as clientActions from "../../store/clients/actions";

import AuthenticatedMainContent from "../AuthenticatedMainContent";
import {sort} from "../shared/helpers";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";

// import AddIcon from "material-ui-icons/Add";
import Button from "material-ui/Button";
import Dialog, { DialogActions } from "material-ui/Dialog";
import Grid from "material-ui/Grid";
import { MenuItem } from "material-ui/Menu";
import TextField from "material-ui/TextField";

import CancelButton from "../shared/CancelButton";
import LoadingSpinner from "../shared/LoadingSpinner";
import PaddedCard from "../shared/PaddedCard";

import { ClientGroupDetailDto, ClientGroupDto } from "../../infrastructure/api";

interface IReduxStateProps {
  beingCreated: ClientDto;
  allClientGroups: ClientGroupDetailDto[];
  beingCreatedGroup: ClientGroupDto;
}

interface IReduxDispatchProps {
  updateClientBeingCreated: (client: ClientDto) => void;
  createClient: (link: string) => void;
  updateClientGroupBeingCreated: (clientGroup: ClientGroupDto) => void;
  createClientGroup: () => Promise<ClientGroupDto>;
  hydrateClientGroupsAsync: () => void;
}

type ClientProps =
& RouteComponentProps<{}>
& IReduxStateProps
& IReduxDispatchProps;

class NewClient extends React.Component<ClientProps, {}> {
  public state = {
    groupId: -1,
    groupName: "",
    showNewGroupField: false,
    clientGroups: this.props.allClientGroups,
    prospectNameValid: false,
    groupNameValid: false,
    selectGroupValid: false,
    prospectNameTouched: false,
    groupNameTouched: false,
    selectGroupTouched: false,
  };

  public displayGroups(clientGroups: ClientGroupDetailDto[]) {

    return sort(clientGroups, "name", "ASC").map((clientGroup) =>
      <MenuItem key={clientGroup.id} value={clientGroup.id}>
        {clientGroup.name}
      </MenuItem>,
    );
  }

  public componentWillMount() {
    this.props.hydrateClientGroupsAsync();
  }

  public render() {
    const {
      updateClientBeingCreated,
      beingCreated,
      createClient,
      updateClientGroupBeingCreated,
      beingCreatedGroup,
      createClientGroup,
    } = this.props;

    const changeGroupId = (e: any) => {
      if (e.target.value === "new") {
        this.setState({
          showNewGroupField: true,
          groupId: "new",
          selectGroupValid: false,
        });
      } else if (e.target.value > 0) {
        this.setState({
          showNewGroupField: false,
          groupId: e.target.value,
          selectGroupValid: true,
        });

        updateClientBeingCreated(
          {...beingCreated, clientGroupId: parseInt(e.target.value, 10)},
        );
      } else {
        this.setState({
          selectGroupValid: false,
          groupId: e.target.value,
        });
      }
    };

    const handleClientGroupCreation = async (e: any) => {
      const newClientGroup: ClientGroupDto = await createClientGroup();

      this.setState({
        showNewGroupField: false,
        groupId: newClientGroup.id,
        selectGroupValid: true,
      });

      updateClientBeingCreated(
        {...beingCreated, clientGroupId: newClientGroup.id},
      );
    };

    const checkForContent = (field: any, stateToSet: any, touchedStateToSet: string) => {
      this.setState({ [touchedStateToSet]: true });

      if (field.length > 0) {
        this.setState({ [stateToSet]: true });

        let groupNameUnique = this.state.groupNameValid;
        if (stateToSet === "groupNameValid" && this.props.allClientGroups.findIndex((group) => group.name!.toLowerCase() === field.toLowerCase()) > -1) {
          groupNameUnique = false;
        } else {
          groupNameUnique = true;
        }
        this.setState({ [stateToSet]: groupNameUnique});
      } else {
        this.setState({ [stateToSet]: false });
      }
    };

    const setTouched = (setToState: string) => {
      this.setState({ [setToState]: true });
    };

    const submitForm = (link: string) => {
      { createClient(link); }
    };

    return <div>
      <TopNav title="Create Prospect"/>
      <AuthenticatedMainContent noSidebar={true}>
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
              <PaddedCard
                  title="Prospect Details"
                  body={
                    <div style={{width: "100%"}}>
                      <TextField
                        id="select-group"
                        select
                        label="Group"
                        required
                        error={this.state.selectGroupTouched && !this.state.selectGroupValid}
                        fullWidth={true}
                        helperText={
                          this.state.selectGroupTouched && !this.state.selectGroupValid &&
                          "Oops, it looks like you forgot to fill out all of the fields."
                        }
                        InputProps={{
                          disableUnderline: true,
                        }}
                        SelectProps={{
                          displayEmpty: true,
                        }}
                        value={this.state.groupId}
                        onChange={changeGroupId}
                        onBlur={ () => setTouched("selectGroupTouched") }
                      >
                        <MenuItem value={-1}></MenuItem>
                        {this.displayGroups(this.props.allClientGroups)}
                        <MenuItem value="new">Create A New Group...</MenuItem>
                      </TextField>

                      <div style={{
                        display: `${this.state.showNewGroupField ? "flex" : "none"}`,
                        alignItems: "flex-end",
                      }}>
                        <TextField
                          id="createGroup"
                          label="New Group Name"
                          required
                          error={this.state.groupNameTouched && !this.state.groupNameValid}
                          fullWidth={true}
                          helperText={this.state.groupNameTouched && !this.state.groupNameValid && "Oops, it looks like you forgot to fill out all of the fields."}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{
                            disableUnderline: true,
                          }}
                          value={this.props.beingCreatedGroup.name}
                          onChange={
                            (e) => updateClientGroupBeingCreated(
                              {...beingCreatedGroup, name: e.target.value},
                            )
                          }
                          onKeyUp={ () => checkForContent(this.props.beingCreatedGroup.name, "groupNameValid", "groupNameTouched") }
                        />
                        <Button
                          raised
                          color="primary"
                          disabled={ !this.state.groupNameValid && true}
                          onClick={ handleClientGroupCreation }
                          style={{marginBottom: 20, marginLeft: 10}}
                        >
                          {/* <AddIcon /> */}
                          Group
                        </Button>
                      </div>

                      <TextField
                        id="name"
                        label="Name"
                        required
                        error={this.state.prospectNameTouched && !this.state.prospectNameValid}
                        fullWidth={true}
                        helperText={this.state.prospectNameTouched && !this.state.prospectNameValid && "Oops, it looks like you forgot to fill out all of the fields."}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        value={this.props.beingCreated.name}
                        onChange={
                          (e) => updateClientBeingCreated({...beingCreated, name: e.target.value})
                        }
                        // onFocus={ () => setTouched("prospectNameTouched") }
                        onKeyUp={ () => checkForContent(this.props.beingCreated.name, "prospectNameValid", "prospectNameTouched") }
                      />
                    </div>
                  }
                  action={
                    <DialogActions>
                      <CancelButton
                        validation={ this.props.beingCreated.name !== "" || this.state.groupId > 0 || this.props.beingCreatedGroup.name !== "" }
                        navigateTo="/"
                      />

                      <Button
                        raised
                        disabled={ (!this.state.prospectNameValid || !this.state.selectGroupValid) && true}
                        color="primary"
                        onClick={ () => submitForm("/") }
                      >
                        Create
                      </Button>

                      <Button
                        raised
                        disabled={ (!this.state.prospectNameValid || !this.state.selectGroupValid) && true}
                        color="primary"
                        onClick={ () => submitForm("/client/1/reports/UploadAdjustmentAnalysis") }
                      >
                        Create and Continue
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
    beingCreated: state.clients.beingCreated,
    allClientGroups: state.clientGroups.list.all,
    beingCreatedGroup: state.clientGroups.beingCreatedGroup,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<() => void>,
                            ownProps: ClientProps): IReduxDispatchProps => ({
                              updateClientGroupBeingCreated: (clientGroup) =>
                                dispatch(clientGroupActions.updateClientGroupBeingCreated({clientGroup})),
                              createClientGroup: () => dispatch(clientGroupActions.createClientGroup()),

                              updateClientBeingCreated: (client) =>
                                dispatch(clientActions.updateClientBeingCreated({client})),
                              createClient: (link) => dispatch(clientActions.createClient(link)),

                              hydrateClientGroupsAsync: () => dispatch(clientGroupActions.hydrateClientGroupsAsync()),
                            });

export default connect<IReduxStateProps, IReduxDispatchProps, ClientProps>
  (mapStateToProps, mapDispatchToProps)(NewClient);
