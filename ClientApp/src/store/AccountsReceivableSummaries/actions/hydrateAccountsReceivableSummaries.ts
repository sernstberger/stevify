import {actionCreatorFactory} from "typescript-fsa";

import {ApiRepository} from "../../../infrastructure/IApiRepository";
import * as Client from "../../../infrastructure/api";

const actionCreator = actionCreatorFactory("ACCOUNTS_RECEIVABLE_SUMMARIES");
const hydrateAccountsReceivableSummaries = actionCreator<{accountsReceivableSummaries: Client.AccountsReceivableSummaryDto}>("hydrateAccountsReceivableSummaries");

const hydrateAccountsReceivableSummariesAsync = () => {
  return async (dispatch: any, getState: any): Promise<void> => {
    const data = await new ApiRepository().apiV1AccountsReceivableClientGroupGet(getState.id);
    dispatch(hydrateAccountsReceivableSummaries( {accountsReceivableSummaries: data} ));
  };
};

export {
  hydrateAccountsReceivableSummaries,
  hydrateAccountsReceivableSummariesAsync,
};
