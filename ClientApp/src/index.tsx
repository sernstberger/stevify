
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader"
import App from "./containers/App";

const render = (AppComponent: any) => {
    ReactDOM.render(
        <AppContainer >
            <AppComponent />
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(App);
if ((module as any).hot) {
    (module as any).hot.accept("./containers/App", () => {
        const NextApp = require("./containers/App").default; // tslint:disable-line no-var-requires
        render(NextApp);
    });
}