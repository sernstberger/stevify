import variables from "../../assets/styles/variables";
import {StyleRules, Theme} from "material-ui/styles";

const styleSheet = (theme: Theme): StyleRules => ({
    content: {
        display: "block",
        width: "100%",
        flexGrow: 1,
        paddingTop: `calc( ${variables.TopNavHeight} + (${theme.spacing.unit}px * 4) )`,
        paddingLeft: `calc( ${variables.drawerWidth} + (${theme.spacing.unit}px * 4) )`,
        paddingRight: `calc( ${theme.spacing.unit}px * 4 )`,
        height: "100%",
    },
});

export default styleSheet;
