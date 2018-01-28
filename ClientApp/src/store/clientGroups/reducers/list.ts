import { reducerWithInitialState } from "typescript-fsa-reducers";

import { ClientGroupDetailDto } from "../../../infrastructure/api";
import * as actions from "../actions";

interface IListClientGroupsReduxState {
  active: ClientGroupDetailDto[];
  prospect: ClientGroupDetailDto[];
  all: ClientGroupDetailDto[];
}

const initialState = {
  active: new Array<ClientGroupDetailDto>(),
  prospect: new Array<ClientGroupDetailDto>(),
  all: new Array<ClientGroupDetailDto>(),
};

const list = reducerWithInitialState(initialState)
  .case(actions.hydrateActiveClientGroups, (state, action) => ({...state, active: action.clientGroups}))
  .case(actions.hydrateProspectClientGroups, (state, action) => ({...state, prospect: action.clientGroups}))
  .case(actions.hydrateAllClientGroups, (state, action) => ({...state, all: action.clientGroups}))
;

export {
  IListClientGroupsReduxState,
};

export default list;
