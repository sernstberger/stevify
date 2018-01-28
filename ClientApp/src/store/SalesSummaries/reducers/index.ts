import { combineReducers } from "redux";
import { SalesSummaryDto } from "../../../infrastructure/api";
import list from "./list";

interface ISalesSummariesReduxState {
  list: SalesSummaryDto;
}

export {
  ISalesSummariesReduxState,
};

export default combineReducers({
  list,
});
