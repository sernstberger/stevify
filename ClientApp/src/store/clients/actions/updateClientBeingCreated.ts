import {actionCreatorFactory} from "typescript-fsa";

import * as Client from "../../../infrastructure/api";

const actionCreator = actionCreatorFactory("CLIENT");
const updateClientBeingCreated = actionCreator<{client: Client.ClientDto}>("updateClientBeingCreated");

export {
  updateClientBeingCreated,
};
