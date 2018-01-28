import * as React from "react";

import AutorenewIcon from "material-ui-icons/Autorenew";
import Avatar from "material-ui/Avatar";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

type LoadingSpinnerProps =
StyledComponentProps;

const LoadingSpinner = (props: LoadingSpinnerProps) => {
    return (
        <Avatar className={props.classes!.loadingSpinner}>
            <AutorenewIcon className={props.classes!.loadingSpinnerIcon} />
        </Avatar>
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(LoadingSpinner);
