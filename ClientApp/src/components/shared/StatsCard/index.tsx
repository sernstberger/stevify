import * as React from "react";

import Card, {CardContent} from "material-ui/Card";
// import Chip from "material-ui/Chip";
import Typography from "material-ui/Typography";
import StatsCardContent from "../StatsCardContent";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface IStatsCardProps extends StyledComponentProps {
    key?: number;
    title?: string;
    stat?: number;
    amount: number;
    period?: string;
    showInDollars?: boolean;
}

const StatsCard = (props: IStatsCardProps) => {
    // const { key, title, stat, amount, period, showInDollars } = props;
    const { title, amount, period, showInDollars } = props;

    return (
        <Card className={props.classes!.root}>
            <CardContent className={props.classes!.heading}>
                <Typography type="subheading">{title}</Typography>
                {/* <Chip
                    label={ props.amount > 0 ? "+" + stat + "%" : stat + "%"}
                    className={ props.amount > 0 ? props.classes!.positive : props.classes!.negative }
                /> */}
            </CardContent>
            <StatsCardContent amount={amount} period={period} showInDollars={showInDollars}/>
        </Card>
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(StatsCard);
