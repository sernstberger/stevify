import {actionCreatorFactory} from "typescript-fsa";

import * as Claim from "../../../infrastructure/api";

const actionCreator = actionCreatorFactory("CLAIM");
const updateClaimBeingCreated =
  actionCreator<{claim: any}>("updateClientBeingCreated");

export {
  updateClaimBeingCreated,
};
