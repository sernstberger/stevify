import * as React from "react";
import { connect, Dispatch } from "react-redux";

import Card, {CardContent} from "material-ui/Card";
import Divider from "material-ui/Divider";
import Typography from "material-ui/Typography";
import StatsCardContent from "../shared/StatsCardContent";

import { AccountsReceivableSummaryDto } from "../../infrastructure/api";
import { IApplicationState } from "../../store";
import * as AccountsReceivableSummariesActions from "../../store/AccountsReceivableSummaries/actions";

interface IReduxStateProps {
  groupAccountsReceivableSummaries: AccountsReceivableSummaryDto;
}

interface IReduxDispatchProps {
  hydrateAccountsReceivableSummaries: () => void;
}

interface IAccountsReceivableSummaryOwnProps {

}

type AccountsReceivableSummaryProps =
& IReduxStateProps
& IReduxDispatchProps;

export class AccountsReceivableSummary extends React.Component<AccountsReceivableSummaryProps, {}> {

  public componentWillMount() {
    this.props.hydrateAccountsReceivableSummaries();
  }

  public render() {
    const ARItems = this.props.groupAccountsReceivableSummaries;

    return (
      <Card style={{marginBottom: 16}}>
        <CardContent>
          <Typography type="subheading">Outstanding AR</Typography>
        </CardContent>

        <StatsCardContent amount={ARItems.thirtyDays} period="30 days" showInDollars />
        <StatsCardContent amount={ARItems.sixtyDays} period="60 days" showInDollars />
        <StatsCardContent amount={ARItems.ninetyPlusDays} period="90 days" showInDollars />
        <Divider />
        <StatsCardContent amount={ARItems.total} period="Total" showInDollars />
      </Card>
    );
  }
}

const mapStateToProps = (state: IApplicationState): IReduxStateProps => {
  return {
    groupAccountsReceivableSummaries: state.accountsReceivableSummaries.list,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<() => void>,
                            ownProps: AccountsReceivableSummaryProps): IReduxDispatchProps => ({
                              hydrateAccountsReceivableSummaries: () =>
                                dispatch(AccountsReceivableSummariesActions.hydrateAccountsReceivableSummariesAsync()),
});

export default connect<IReduxStateProps, IReduxDispatchProps, IAccountsReceivableSummaryOwnProps>
  (mapStateToProps, mapDispatchToProps)(AccountsReceivableSummary);
