import {actionCreatorFactory} from "typescript-fsa";

import * as ClientGroup from "../../../infrastructure/api";

const actionCreator = actionCreatorFactory("CLIENTGROUPS");
const updateClientGroupBeingCreated =
  actionCreator<{clientGroup: ClientGroup.ClientGroupDto}>("updateClientBeingCreated");

export {
  updateClientGroupBeingCreated,
};
