import {actionCreatorFactory} from "typescript-fsa";

import * as Client from "../../../infrastructure/api";
import {ApiRepository} from "../../../infrastructure/IApiRepository";

const actionCreator = actionCreatorFactory("ACCOUNTS_RECEIVABLE_SUMMARIES");
const hydrateSalesSummaries = actionCreator<{salesSummaries: Client.SalesSummaryDto}>("hydrateSalesSummaries");

const hydrateSalesSummariesAsync = () => {
  return async (dispatch: any, getState: any): Promise<void> => {
    const data = await new ApiRepository().apiV1SalesSummaryClientGroupGet(getState.id);
    dispatch(hydrateSalesSummaries( {salesSummaries: data} ));
  };
};

export {
  hydrateSalesSummaries,
  hydrateSalesSummariesAsync,
};
