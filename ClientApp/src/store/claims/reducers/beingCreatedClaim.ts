import { reducerWithInitialState } from "typescript-fsa-reducers";

import { ClaimSummaryDto } from "../../../infrastructure/api";
import * as actions from "../actions";

const initialState = {
  id: -1,
  name: "",
  clientId: -1,
  status: "",
  statusText: "",
  date: new Date(),
  file: "",
};

const beingCreatedClaim = reducerWithInitialState(initialState)
  .case(actions.updateClaimBeingCreated, (state, action) => action.claim)
;

export default beingCreatedClaim;
