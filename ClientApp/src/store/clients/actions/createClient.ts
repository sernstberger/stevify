// import {actionCreatorFactory} from "typescript-fsa";
import { history } from "configureStore";
import ResultFactory, { Error, handleResult, Success} from "infrastructure/ResultFactory";
// import TM from "infrastructure/TokenManager";
import { pushNotification } from "store/views/actions";
import {ApiRepository} from "../../../infrastructure/IApiRepository";

// const actionCreator = actionCreatorFactory("CLIENTS");

const createClient = (link: string) => {
  return async (dispatch: any, getState: any): Promise<void> => {
    const clientBeingCreated = getState().clients.beingCreated;

    const result = await new ApiRepository().apiV1ClientPost(clientBeingCreated) as any;
    const resultInstance = ResultFactory.createInstance(result.response);

    return handleResult(resultInstance,
      async (success: Success) => {
        await dispatch(pushNotification({notification: {message: "Account has been created.", duration: 4000}}));
        history.push(link);
      },
      async (error: Error) => {
        console.error(error); // tslint:disable-line:no-console
        await dispatch(pushNotification({notification: {message: "Something went wrong", type: "error"}}));
    });
  };
};

export {
    createClient,
};
