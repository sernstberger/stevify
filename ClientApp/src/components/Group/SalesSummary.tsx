import * as React from "react";
import { connect, Dispatch } from "react-redux";

import StatsCard from "../shared/StatsCard";

import { SalesSummaryDto } from "../../infrastructure/api";
import { IApplicationState } from "../../store";
import * as SalesSummariesActions from "../../store/SalesSummaries/actions";

interface IReduxStateProps {
  groupSalesSummaries: SalesSummaryDto;
}

interface IReduxDispatchProps {
  hydrateSalesSummaries: () => void;
}

interface ISalesSummaryOwnProps {

}

type SalesSummaryProps =
& IReduxStateProps
& IReduxDispatchProps;

export class SalesSummary extends React.Component<SalesSummaryProps, {}> {

  public componentWillMount() {
    this.props.hydrateSalesSummaries();
  }

  public render() {
    const SalesItems = this.props.groupSalesSummaries;

    return (
      <div>
        <StatsCard
          title="Discounts"
          amount={SalesItems.discounts!}
          showInDollars={true}
        />

        <StatsCard
          title="Revenue"
          amount={SalesItems.revenue!}
          showInDollars={true}
        />

        <StatsCard
          title="Orders Shipped"
          amount={SalesItems.ordersShipped!}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState): IReduxStateProps => {
  return {
    groupSalesSummaries: state.salesSummaries.list,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<() => void>,
                            ownProps: SalesSummaryProps): IReduxDispatchProps => ({
                              hydrateSalesSummaries: () =>
                                dispatch(SalesSummariesActions.hydrateSalesSummariesAsync()),
});

export default connect<IReduxStateProps, IReduxDispatchProps, ISalesSummaryOwnProps>
  (mapStateToProps, mapDispatchToProps)(SalesSummary);
