import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
  SidebarNavItem: {
    opacity: .5,
    position: "relative",

    "&:hover": {
      backgroundColor: variables.drawerItemHoverColor,
      cursor: "pointer",
    },
  },

  SidebarNavItemActive: {
    color: variables.primaryColor,
    opacity: 1,

    "&:before": {
      backgroundColor: variables.primaryColor,
      borderRadius: "0 4px 4px 0",
      bottom: 0,
      boxShadow: `2px 0 10px ${variables.primaryColor}`,
      content: "''",
      left: 0,
      position: "absolute",
      top: 0,
      width: 5,
    },
  },

  SidebarNavItemLinkText: {
    lineHeight: "24px",
    padding: 0,
  },
});

export default styleSheet;
