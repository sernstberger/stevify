import { reducerWithInitialState } from "typescript-fsa-reducers";

import { ClientDto } from "../../../infrastructure/api";
import * as actions from "../actions";

const initialState: ClientDto = {
  id: -1,
  active: false,
  name: "",
  clientGroupId: -1,
};

const beingCreated = reducerWithInitialState(initialState)
  .case(actions.updateClientBeingCreated, (state, action) => action.client)
;

export default beingCreated;
