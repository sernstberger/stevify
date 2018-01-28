import {actionCreatorFactory} from "typescript-fsa";
import * as Client from "../../../infrastructure/api";

import {ApiRepository} from "../../../infrastructure/IApiRepository";

const actionCreator = actionCreatorFactory("CLIENTGROUP");
const hydrateClientGroup = actionCreator<{clientGroup: Client.ClientGroupDetailDto}>("hydrateClientGroup");

const hydrateClientGroupAsync = (groupId: number) => {
  return async (dispatch: any, getState: any): Promise<void> => {
    const data = await new ApiRepository().apiV1ClientGroupByIdGet(groupId);
    dispatch(hydrateClientGroup( {clientGroup: data} ));
  };
};

export {
  hydrateClientGroup,
  hydrateClientGroupAsync,
};


