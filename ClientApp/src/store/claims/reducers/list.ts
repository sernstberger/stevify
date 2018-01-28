import { reducerWithInitialState } from "typescript-fsa-reducers";

import { ClaimSummaryDto } from "../../../infrastructure/api";
import * as actions from "../actions";

interface IListClaimsReduxState {
  all: ClaimSummaryDto[];
}

const initialState = {
  all: new Array<ClaimSummaryDto>(),
};

const list = reducerWithInitialState(initialState)
  .case(actions.hydrateClaims, (state, action) => ({...state, all: action.claims}))
;

export {
  IListClaimsReduxState,
};

export default list;
