import * as React from "react";

// import AppBar from "material-ui/AppBar";
// import Toolbar from "material-ui/Toolbar";
// import Typography from "material-ui/Typography";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../assets/styles/themes";
import styleSheet from "./styles";

interface IMainContentProps extends StyledComponentProps {
    children?: any;
}

const MainContent = (props: IMainContentProps) => {

    return (
        <div>
            <main className={props.classes!.content}>
                { props.children }
            </main>
        </div>
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(MainContent);
