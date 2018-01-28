import * as React from "react";
import { connect, Dispatch } from "react-redux";

import AuthenticatedMainContent from "../AuthenticatedMainContent";
// import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";

import Button from "material-ui/Button";
import Card, {CardContent} from "material-ui/Card";
import Divider from "material-ui/Divider";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import CardHeaderWithAction from "../shared/CardHeaderWithAction";
import ListCollapsable from "../shared/ListCollapsable";
import ListCollapsableItem from "../shared/ListCollapsable/ListCollapsableItem";

import {sort} from "../shared/helpers";

import { ClientGroupDetailDto } from "../../infrastructure/api";
import { IApplicationState } from "../../store";
import * as clientGroupActions from "../../store/clientGroups/actions";

interface IReduxStateProps {
  activeClientGroups: ClientGroupDetailDto[];
  prospectClientGroups: ClientGroupDetailDto[];
}

interface IReduxDispatchProps {
  hydrateClientGroupsAsync: (active: boolean) => void;
}

type ClientGroupProps =
& IReduxStateProps
& IReduxDispatchProps;

export class Home extends React.Component<ClientGroupProps, {}> {

  public displayClientGroups(clientGroups: ClientGroupDetailDto[]) {

    if (clientGroups.length) {
      return sort(clientGroups, "name", "ASC").map((clientGroup) =>
        <div key={clientGroup.id}>
          <ListCollapsable
            id={clientGroup.id}
            name={clientGroup.name}
            content={
              sort(clientGroup.clients, "name", "ASC").map((client) =>
                <ListCollapsableItem
                  key={client.id}
                  id={client.id}
                  name={client.name}
                  groupId={client.clientGroupId}
                  active={client.active}
                />,
              )
            }
          />
          <Divider />
        </div>,
      );
    } else {
      return <CardContent>There's no accounts yet.</CardContent>;
    }
  }

  public componentWillMount() {
    this.props.hydrateClientGroupsAsync(true);
    this.props.hydrateClientGroupsAsync(false);
  }

  public render() {
    return <div>
      <TopNav
        title="Young at Heart Accounts"
      />
      {/* <SidebarNav /> */}
      <AuthenticatedMainContent noSidebar={true}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={8} lg={8}>
            <TextField
              id="name"
              label={false}
              style={{marginTop: 0}}
              fullWidth={true}
              InputLabelProps={{
                  shrink: true,
              }}
              InputProps={{
                placeholder: "Search for groups and accounts",
                disableUnderline: true,
              }}
              // value={this.props.clientGroups.name}
              // onChange={
              //     (e) => updateClientBeingCreated({...beingCreated, name: e.target.value})
              // }
            />
          </Grid>
          <Grid item xs={12} md={4} style={{textAlign: "right"}}>
            <Button raised color="primary" href="/prospect/new">
                + Create New
            </Button>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
              <Card>
                  <CardHeaderWithAction
                      title="Active Accounts"
                  />
                  {this.displayClientGroups(this.props.activeClientGroups)}
              </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
              <Card>
                  <CardHeaderWithAction
                      title="Prospect Accounts"
                  />
                  {this.displayClientGroups(this.props.prospectClientGroups)}
              </Card>
          </Grid>
        </Grid>
      </AuthenticatedMainContent>
    </div>;
  }
}

const mapStateToProps = (state: IApplicationState): IReduxStateProps => {
    return {
      activeClientGroups: state.clientGroups.list.active,
      prospectClientGroups: state.clientGroups.list.prospect,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<() => void>,
                            ownProps: ClientGroupProps): IReduxDispatchProps => ({
    hydrateClientGroupsAsync: (active: boolean) => dispatch(clientGroupActions.hydrateClientGroupsAsync(active)),
});

export default connect<IReduxStateProps, IReduxDispatchProps, ClientGroupProps>
  (mapStateToProps, mapDispatchToProps)(Home);
