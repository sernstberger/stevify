import { combineReducers } from "redux";

import { ClaimSummaryDto } from "../../../infrastructure/api";
import beingCreatedClaim from "./beingCreatedClaim";
import claim from "./claim";
import list, { IListClaimsReduxState } from "./list";

interface IClaimsReduxState {
  beingCreatedClaim: ClaimSummaryDto;
  list: IListClaimsReduxState;
  claim: ClaimSummaryDto;
}

export {
  IClaimsReduxState,
};

export default combineReducers({
  beingCreatedClaim,
  claim,
  list,
});
