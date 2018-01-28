import { reducerWithInitialState } from "typescript-fsa-reducers";

import * as actions from "../actions";

interface IListSalesSummariesReduxState {
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
  .case(actions.hydrateSalesSummaries, (state, action) => ({...state, ...action.salesSummaries}))
;

export {
  IListSalesSummariesReduxState,
};

export default list;
