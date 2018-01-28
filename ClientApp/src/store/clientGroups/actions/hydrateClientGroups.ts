import * as Client from "infrastructure/api";
import {actionCreatorFactory} from "typescript-fsa";

import {ApiRepository} from "infrastructure/IApiRepository";

const actionCreator = actionCreatorFactory("CLIENTGROUPS");
const hydrateActiveClientGroups = actionCreator<{clientGroups: Client.ClientGroupDetailDto[]}>("hydrateActiveClientGroups");
const hydrateProspectClientGroups = actionCreator<{clientGroups: Client.ClientGroupDetailDto[]}>("hydrateProspectClientGroups");
const hydrateAllClientGroups = actionCreator<{clientGroups: Client.ClientGroupDetailDto[]}>("hydrateAllClientGroups");

const hydrateClientGroupsAsync = (active?: boolean) => {
  return async (dispatch: any, getState: any): Promise<void> => {
    const data = await new ApiRepository().apiV1ClientGroupGet(active);
    if (active) {
      dispatch(hydrateActiveClientGroups( {clientGroups: data} ));
    } else if (active === false) {
      dispatch(hydrateProspectClientGroups( {clientGroups: data} ));
    } else {
      dispatch(hydrateAllClientGroups( {clientGroups: data} ));
    }
  };
};

export {
  hydrateActiveClientGroups,
  hydrateProspectClientGroups,
  hydrateAllClientGroups,
  hydrateClientGroupsAsync,
};
