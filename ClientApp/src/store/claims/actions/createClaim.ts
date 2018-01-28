import { history } from "configureStore";
import {ApiRepository} from "infrastructure/IApiRepository";

import * as Claim from "infrastructure/api";

import { pushNotification } from "store/views/actions";

const createClaim = (): (dispatch: any, getState: any) => Promise<Claim.ClaimSummaryDto> => {
  return async (dispatch: any, getState: any): Promise<any> => {
    const claimBeingCreated = getState().claims.beingCreatedClaim;
    const file = claimBeingCreated.file;

    const result = await new ApiRepository().apiV1ClaimsPost(
      claimBeingCreated.clientId,
      file,
      claimBeingCreated.name,
    ) as any;

    if (result.status === "ProcessingQueued") {
      history.push(`/client/${claimBeingCreated.clientId}/reports/AdjustmentAnalysisList`);
    } else {
      await dispatch(pushNotification({notification: {message: "Something went wrong", type: "error"}}));
    }

  };
};

export {
    createClaim,
};
