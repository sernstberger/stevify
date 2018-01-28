import variables from "../../../assets/styles/variables";
import {StyleRules, Theme} from "material-ui/styles";

const styleSheet = (theme: Theme): StyleRules => ({
    root: {
        marginBottom: theme.spacing.unit * 2,
    },
    heading: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: 0,
    },
    negative: {
        backgroundColor: variables.negativeLight,
        color: variables.negative,
    },
    positive: {
        backgroundColor: variables.successLight,
        color: variables.success,
    },
    stat: {
        paddingTop: theme.spacing.unit,

        "&:last-child": {
            paddingBottom: theme.spacing.unit * 2,
        },
    },
});

export default styleSheet;
