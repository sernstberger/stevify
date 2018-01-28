import { reducerWithInitialState } from "typescript-fsa-reducers";

import { ClientGroupDto } from "../../../infrastructure/api";
import * as actions from "../actions";

const initialState: ClientGroupDto = {
  id: -1,
  name: "",
};

const beingCreatedGroup = reducerWithInitialState(initialState)
  .case(actions.updateClientGroupBeingCreated, (state, action) => action.clientGroup)
;

export default beingCreatedGroup;
