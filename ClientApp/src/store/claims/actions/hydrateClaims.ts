import * as Client from "infrastructure/api";
import {actionCreatorFactory} from "typescript-fsa";

import {ApiRepository} from "infrastructure/IApiRepository";

const actionCreator = actionCreatorFactory("CLAIMS");
const hydrateClaims = actionCreator<{claims: Client.ClaimSummaryDto[]}>("hydrateClaims");

const hydrateClaimsAsync = (clientId: number) => {
  return async (dispatch: any, getState: any): Promise<void> => {
    const data = await new ApiRepository().apiV1ClaimsGet(clientId);
    dispatch(hydrateClaims( {claims: data} ));
  };
};

export {
  hydrateClaims,
  hydrateClaimsAsync,
};
