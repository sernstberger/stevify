import { reducerWithInitialState } from "typescript-fsa-reducers";

import { ClientDto, ClientGroupDetailDto } from "infrastructure/api";
import * as actions from "../actions";

interface IClientGroupReduxState {
  id: number;
  name: string;
  clients: ClientDto[];
}

const initialState: ClientGroupDetailDto = {
  id: -1,
  name: "",
  clients: new Array<ClientDto>(),
};

const group = reducerWithInitialState(initialState)
  .case(actions.hydrateClientGroup, (state, action) => action.clientGroup)
;

export {
  IClientGroupReduxState,
};

export default group;
