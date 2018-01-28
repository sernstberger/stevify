import { reducerWithInitialState } from "typescript-fsa-reducers";

import * as actions from "../actions";

interface IListAccountsReceivableSummariesReduxState {
  total: number;
  thirtyDays: number;
  sixtyDays: number;
  ninetyPlusDays: number;
}

const initialState = {
  total: 0,
  thirtyDays: 0,
  sixtyDays: 0,
  ninetyPlusDays: 0,
};

const list = reducerWithInitialState(initialState)
  .case(actions.hydrateAccountsReceivableSummaries, (state, action) => ({...state, ...action.accountsReceivableSummaries}))
;

export {
  IListAccountsReceivableSummariesReduxState,
};

export default list;
