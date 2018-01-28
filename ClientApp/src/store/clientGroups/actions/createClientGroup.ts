// import {actionCreatorFactory} from "typescript-fsa";
// import { history } from "../../../boot-client";
import {ApiRepository} from "../../../infrastructure/IApiRepository";

import { hydrateClientGroupsAsync } from "store/clientGroups/actions/hydrateClientGroups";
import * as ClientGroup from "../../../infrastructure/api";

// const actionCreator = actionCreatorFactory("CLIENT_GROUP");

const createClientGroup = (): (dispatch: any, getState: any) => Promise<ClientGroup.ClientGroupDto> => {
  return async (dispatch: any, getState: any): Promise<ClientGroup.ClientGroupDto> => {
    const clientGroupBeingCreated = getState().clientGroups.beingCreatedGroup;
    const result = await new ApiRepository().apiV1ClientGroupPost(clientGroupBeingCreated);
    dispatch(hydrateClientGroupsAsync());
    return result;
  };
};

export {
    createClientGroup,
};
