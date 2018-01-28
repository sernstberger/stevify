import * as auth0 from "auth0-js";
import { pushNotification } from "store/views/actions";
import {actionCreatorFactory} from "typescript-fsa";
import { history } from "../../configureStore";

import { Auth0Error } from "auth0-js";
import { ISessionReducerState } from "./sessionReducer";

import {
  assignTokenToLocalStorage,
  removeTokenFromLocalStorage,
  removeTokenFromSessionStorage,
} from "../tokens";

const a0 = new auth0.WebAuth({
    domain: "yah.auth0.com",
    clientID: "q4kZUo30xNTp3FiN49jFSvj0XNWyEXxG",
    redirectUri: "/authResponse",
    audience: "http://yah.localhost",
});

const actionCreator = actionCreatorFactory("SESSION");

const updateSessionField = actionCreator<{ fieldName: string, value: any }>("updateSessionField");
const logout = actionCreator("logout");
const login = actionCreator<{token: string}>("login");
const submitAuthDataAction = actionCreator<{ session: ISessionReducerState }>("submitAuthDataAction");

const logoutAsync = () => {
  return (dispatch: any, getState: any) => {
    removeTokenFromLocalStorage();
    removeTokenFromSessionStorage();
    dispatch(logout());
  };
};

const submitAuthData = () => {
  return async (dispatch: any, getState: any) => {
    const {session} = getState();

    const authResult = await new Promise<any>((resolve, reject) =>
      Promise.resolve()
        .then(() => {
          // a0.authorize
          a0.client.login({
            realm: "Username-Password-Authentication",
            username: session.email,
            password: session.password,
            scope: "openid profile email address phone app_metadata",
          }, (err: Auth0Error, res: any) => {
            if (err) {
              reject(err.description);
              dispatch(pushNotification({notification: {message: "Wrong username or password.", duration: 4000, type: "error"}}));
              return;
            }

            resolve(res);
          });
        }),
    );
    assignTokenToLocalStorage(session.email, authResult.accessToken);
    await dispatch(login({token: authResult.accessToken}));
    await dispatch(pushNotification({notification: {message: "Login Successful", duration: 4000}}));
    history.push("/");
  };
};

export {
  logout,
  logoutAsync,
  submitAuthData,
  submitAuthDataAction,
  updateSessionField,
  login,
};
