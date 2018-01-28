import {reducerWithInitialState} from "typescript-fsa-reducers";

import INotification from "infrastructure/interfaces/INotification";
import * as globalActions from "store/views/actions/globalViewActions";

interface IGlobalViewReduxState {
  navOpen: boolean;
  globalContextOpen: boolean;
  notifications: INotification[];
  currentRequests: number;
  showAvailableLoadsMap: boolean;
}

const initialState = {
  navOpen: false,
  globalContextOpen: false,
  notifications: new Array<INotification>(),
  currentRequests: 0,
  showAvailableLoadsMap: false,
};

const global = reducerWithInitialState(initialState)
  .case(globalActions.toggleNav, (state, action) => ({ ...state, navOpen: !state.navOpen }))
  .case(globalActions.toggleGlobalContext, (state, action) => ({...state, globalContextOpen: !state.globalContextOpen}))
  .case(globalActions.pushNotification, (state, action) => ({
    ...state,
    notifications: [...state.notifications, action.notification],
  }))
  .case(globalActions.spliceNotification, (state, action) => ({
    ...state,
    notifications: [
      ...state.notifications.slice(0, action.index),
      ...state.notifications.slice((action.index + 1)),
    ],
  }))

  .case(globalActions.toggleAvailableLoadsView, (state, action) => ({
    ...state,
    showAvailableLoadsMap: !state.showAvailableLoadsMap,
  }))
;

export {
  IGlobalViewReduxState,
};

export default global;
