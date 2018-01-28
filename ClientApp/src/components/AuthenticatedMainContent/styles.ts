import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../assets/styles/variables";

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

    noSidebar: {
      paddingLeft: `calc( ${theme.spacing.unit}px * 4 )`,
      paddingRight: `calc( ${theme.spacing.unit}px * 4 )`,
    },
});

export default styleSheet;
