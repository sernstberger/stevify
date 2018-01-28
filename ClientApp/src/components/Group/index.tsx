import * as React from "react";

import { history } from "configureStore";
import { Link, RouteComponentProps } from "react-router-dom";
import { connect, Dispatch } from "react-redux";

import AuthenticatedMainContent from "../AuthenticatedMainContent";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";

import Card, {CardContent} from "material-ui/Card";
import Grid from "material-ui/Grid";
import List, { ListItem, ListItemText } from "material-ui/List";
import Typography from "material-ui/Typography";
import DateRange from "../shared/DateRange";
import { sort } from "../shared/helpers";
import ProgressGroup from "../shared/ProgressGroup";

import { ClientGroupDetailDto } from "../../infrastructure/api";
import { IApplicationState } from "../../store";
import * as clientGroupActions from "../../store/clientGroups/actions";

import AccountsReceivableSummary from "./AccountsReceivable";
import SalesSummary from "./SalesSummary";

function createData(id: number, name: string, amountNumber: number, amountPercentage: number) {
  return { id, name, amountNumber, amountPercentage };
}

const topSavingsMedicationData = [
  createData(1, "Frozen yoghurt", 159, 6.0),
  createData(2, "Ice cream sandwich", 237, 9.0),
  createData(3, "Eclair", 262, 16.0),
  createData(4, "Cupcake", 305, 3.7),
  createData(5, "Gingerbread", 356, 36.0),
];

const topSavingsCategoryData = [
  createData(1, "Fooooooo", 543, 16.0),
  createData(2, "Blehhhhhhh", 66, 19.0),
  createData(3, "Ehhhhhhhhh", 775, 46.0),
  createData(4, "Adddddaaaaaaaa", 77, 63.7),
  createData(5, "Welllllllllll", 764, 76.0),
];

const topSpendingMedicationData = [
  createData(1, "Something", 159, 67.0),
  createData(2, "Else", 237, 9.0),
  createData(3, "Goes", 262, 16.0),
  createData(4, "Here", 305, 3.7),
  createData(5, "Now", 356, 36.0),
];

const topSpendingCategoryData = [
  createData(1, "Nothing", 159, 67.0),
  createData(2, "Else", 237, 9.0),
  createData(3, "Goes", 262, 16.0),
  createData(4, "Here", 305, 3.7),
  createData(5, "Now", 356, 36.0),
];

const topVolumeMedicationData = [
  createData(1, "Something", 159, 67.0),
  createData(2, "Else", 237, 9.0),
  createData(3, "Goes", 262, 16.0),
  createData(4, "Here", 305, 3.7),
  createData(5, "Now", 356, 36.0),
];

const topVolumeCategoryData = [
  createData(1, "Nothing", 159, 67.0),
  createData(2, "Else", 237, 9.0),
  createData(3, "Goes", 262, 16.0),
  createData(4, "Here", 305, 3.7),
  createData(5, "Now", 356, 36.0),
];

interface IReduxStateProps {
  group: ClientGroupDetailDto;
}

interface IReduxDispatchProps {
  hydrateClientGroup: (groupId: number) => void;
}

interface IClientGroupOwnProps {

}

type ClientGroupProps =
& IReduxStateProps
& IReduxDispatchProps;

export class Group extends React.Component<ClientGroupProps, {}> {

  public componentWillMount() {
    const parts = window.location.pathname.split("/");
    const result = parts[parts.length - 1];
    this.props.hydrateClientGroup(parseInt(result, 10));
  }

  public render() {
    return <div>
      <TopNav
        title={`${this.props.group.name} Dashboard`}
        group={this.props.group.name}
        child={true}
      />
      <SidebarNav active="Dashboard" />
      <AuthenticatedMainContent>
        <DateRange/>

        <Grid container spacing={24}>
          <Grid item xs={12} md={3}>

            <SalesSummary />

            <AccountsReceivableSummary />

            <Card>
              <CardContent>
                <Typography type="subheading">Active Accounts</Typography>
              </CardContent>

              <List style={{paddingTop: 0}}>
                {sort(this.props.group.clients!, "name", "ASC").map((client) =>
                  client.active &&
                    <ListItem key={client.id} button onClick={() => history.push(`/group/${this.props.group.id}/client/${client.id}`)}>
                      <ListItemText secondary={client.name} />
                    </ListItem>,
                )}
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={9}>
            <ProgressGroup
              title="Top Savings"
              topMedicationItems={topSavingsMedicationData}
              topCategoryItems={topSavingsCategoryData}
            />

            <br />

            <ProgressGroup
              title="Top Spending"
              topMedicationItems={topSpendingMedicationData}
              topCategoryItems={topSpendingCategoryData}
            />

            <br />

            <ProgressGroup
              title="Top Volume"
              topMedicationItems={topVolumeMedicationData}
              topCategoryItems={topVolumeCategoryData}
            />

          </Grid>
        </Grid>
      </AuthenticatedMainContent>
    </div>;
  }
}

const mapStateToProps = (state: IApplicationState): IReduxStateProps => {
  return {
    group: state.clientGroups.group,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<() => void>,
                            ownProps: ClientGroupProps): IReduxDispatchProps => ({
                              hydrateClientGroup: (groupId) =>
                                dispatch(clientGroupActions.hydrateClientGroupAsync(groupId)),
});

export default connect<IReduxStateProps, IReduxDispatchProps, IClientGroupOwnProps>
  (mapStateToProps, mapDispatchToProps)(Group);

