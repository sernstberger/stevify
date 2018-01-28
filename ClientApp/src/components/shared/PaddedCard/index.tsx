import * as React from "react";

import Card, {CardActions, CardContent} from "material-ui/Card";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

import {StyledComponentProps, withStyles} from "material-ui/styles";
import {IStyles} from "../../../assets/styles/themes";
import styleSheet from "./styles";

interface IPaddedCardProps extends StyledComponentProps {
    title: string;
    body?: JSX.Element;
    action?: JSX.Element;
}

const PaddedCard = (props: IPaddedCardProps) => {
    const { title, body, action } = props;

    return (
        <Card>
            <CardContent>
                <Grid container justify="center">
                    <Grid item xs={12} md={10}>
                        <Typography type="subheading" align="center">{title}</Typography>
                        <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                            {body}
                        </div>
                        <CardActions style={{justifyContent: "center"}}>
                            {action}
                        </CardActions>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default withStyles<IStyles["classes"]>(styleSheet)(PaddedCard);
