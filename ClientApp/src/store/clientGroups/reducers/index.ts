import { combineReducers } from "redux";

import { ClientGroupDetailDto, ClientGroupDto } from "../../../infrastructure/api";
import beingCreatedGroup from "./beingCreatedGroup";
import group from "./group";
import list, { IListClientGroupsReduxState } from "./list";

interface IClientGroupsReduxState {
  beingCreatedGroup: ClientGroupDto;
  list: IListClientGroupsReduxState;
  group: ClientGroupDetailDto;
}

export {
  IClientGroupsReduxState,
};

export default combineReducers({
  beingCreatedGroup,
  group,
  list,
});
