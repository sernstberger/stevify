import {reducerWithInitialState} from "typescript-fsa-reducers";
import { initialEmail, initialToken } from "../tokens";
import { login, logout, updateSessionField } from "./sessionActions";

export interface ISessionReducerState {
  email: string;
  password: string;
  token?: string;
  authenticated: boolean;

  loggingIn: boolean;
  loginFailureReason: string;
}

const initialState = {
  email: initialEmail(),
  password: "",
//   rememberMe: !!readTokenFromLocalStorage(),

  token: initialToken(),
  get authenticated() {
    return !!this.token;
  },

  loggingIn: false,
  loginFailureReason: "",
  passwordResetMessage: "",
  passwordResetInProgress: false,
};

const session = reducerWithInitialState(initialState)
    .case(updateSessionField, (state, {fieldName, value}) => ({...state, [fieldName]: value}))
    .case(logout, (state) => ({...state, authenticated: false, token: "", loginFailureReason: ""}))
    .case(login, (state, action) => ({...state, token: action.token, authenticated: true}))
;

export default session;
