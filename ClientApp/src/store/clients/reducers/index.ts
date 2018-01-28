import { combineReducers } from "redux";

import { ClientDto } from "../../../infrastructure/api";
import beingCreated from "./beingCreated";

interface IClientsReduxState {
  beingCreated: ClientDto;
}

export {
    IClientsReduxState,
};

export default combineReducers({
  beingCreated,
});
