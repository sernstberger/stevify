import * as React from "react";

import {CardContent} from "material-ui/Card";
import Typography from "material-ui/Typography";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

import { formattedNumber, money } from "../helpers";

interface IStatsCardContentProps extends StyledComponentProps {
    amount: any;
    period?: string;
    showInDollars?: boolean;
}

const StatsCardContent = (props: IStatsCardContentProps) => {
    const { amount, period, showInDollars } = props;

    return (
        <CardContent className={props.classes!.stat}>
            <Typography
                type="display1"
                color={ props.amount > 0 ? "primary" : "error" }
            >
            { showInDollars ?
              money(amount)
            :
              formattedNumber(amount)
            }
            </Typography>
            { period && <Typography type="body1">{period}</Typography> }
        </CardContent>
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(StatsCardContent);
