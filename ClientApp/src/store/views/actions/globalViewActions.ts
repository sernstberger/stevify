import {actionCreatorFactory} from "typescript-fsa";

import INotification from "infrastructure/interfaces/INotification";

const actionCreator = actionCreatorFactory("GLOBAL_VIEW");

const toggleNav = actionCreator("toggleNav");
const toggleGlobalContext = actionCreator("toggleGlobalContext");

const pushNotification = actionCreator<{notification: INotification}>("pushNotification");
const spliceNotification = actionCreator<{index: number}>("spliceNotification");

const toggleAvailableLoadsView = actionCreator("toggleAvailableLoadsView");

export {
  toggleNav,
  toggleGlobalContext,
  pushNotification,
  spliceNotification,
  toggleAvailableLoadsView,
};
