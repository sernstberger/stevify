import * as React from "react";

import MainContent from "./MainContent";

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div>
            <MainContent { ...this.props } />
        </div>;
    }
}
