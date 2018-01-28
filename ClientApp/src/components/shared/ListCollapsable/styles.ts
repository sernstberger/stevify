import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
  ListItemWithButton: {
    paddingBottom: 0,
    paddingRight: 20,
    paddingTop: 0,
  },
  ListItemWithButtonLink: {
    color: variables.textColor,
    fontSize: 18,
    flex: "1 1 auto",
    textDecoration: "none",

    "&:hover": {
      color: variables.primaryColor,
      textDecoration: "underline",
    },
  },
  InsetListItem: {
    justifyContent: "space-between",
  },
  InsetListItemLink: {
    color: variables.textColorMuted,
    paddingLeft: `calc( ${variables.spacing}px * 2 )`,
    textDecoration: "none",

    "&:hover": {
      color: variables.primaryColor,
      textDecoration: "underline",
    },
  },
});

export default styleSheet;
