import { reducerWithInitialState } from "typescript-fsa-reducers";

import { ClaimSummaryDto } from "infrastructure/api";
import * as actions from "../actions";

interface IClaimReduxState {
  id: number;
  name: string;
  clientId: number;
  status: string;
  statusText: string;
  date: Date;
}

const initialState: ClaimSummaryDto[] = [{
  id: -1,
  name: "",
  clientId: -1,
  status: "",
  statusText: "",
  date: new Date(),
}];

const claim = reducerWithInitialState(initialState)
  .case(actions.hydrateClaims, (state, action) => action.claims)
;

export {
  IClaimReduxState,
};

export default claim;
