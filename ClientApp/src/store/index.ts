import accountsReceivableSummaries, {
  IAccountsReceivableSummariesReduxState,
} from "./AccountsReceivableSummaries/reducers";
import claims, { IClaimsReduxState } from "./claims/reducers";
import clientGroups, { IClientGroupsReduxState } from "./clientGroups/reducers";
import clients, { IClientsReduxState } from "./clients/reducers";
import salesSummaries, {ISalesSummariesReduxState} from "./SalesSummaries/reducers";
import session, { ISessionReducerState } from "./session/sessionReducer";
import global, { IGlobalViewReduxState } from "./views/reducers";

import { routerReducer } from "react-router-redux";
import { Reducer } from "redux";

// The top-level state object
export interface IApplicationState {
    accountsReceivableSummaries: IAccountsReceivableSummariesReduxState;
    salesSummaries: ISalesSummariesReduxState;
    clientGroups: IClientGroupsReduxState;
    clients: IClientsReduxState;
    claims: IClaimsReduxState;
    session: ISessionReducerState;
    global: IGlobalViewReduxState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    accountsReceivableSummaries,
    salesSummaries,
    clientGroups,
    clients,
    claims,
    global,
    session,
    router: routerReducer as Reducer<any>,
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export type IAppThunkAction<TAction> = (dispatch: (action: TAction) => void, getState: () => IApplicationState) => void;
