import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { history } from "../configureStore";

import configureStore from "../configureStore";
import { routes } from "./AppRouter";

interface IAppProps {}

const store = configureStore(undefined);

const App = (props: IAppProps) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={ history } children={routes} store={store}  />
        </Provider>
    );
};

export default App;
