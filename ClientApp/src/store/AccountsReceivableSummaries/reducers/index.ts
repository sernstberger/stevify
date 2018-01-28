import { combineReducers } from "redux";
import { AccountsReceivableSummaryDto } from "../../../infrastructure/api";
import list from "./list";

interface IAccountsReceivableSummariesReduxState {
  list: AccountsReceivableSummaryDto;
}

export {
  IAccountsReceivableSummariesReduxState,
};

export default combineReducers({
  list,
});
