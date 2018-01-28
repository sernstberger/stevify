import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
  CardContent: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 32,
    transition: "250ms all",
    "&:last-child": {
      paddingBottom: 32,
    },
    "&:hover": {
      borderRadius: 4,
      boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.05), 0px 1px 5px 0px rgba(0, 0, 0, 0.05)",
    },
  },
  disabled: {
    opacity: .5,
    pointerEvents: "none",
  },
  Link: {
    textDecoration: "none",
  },
  squareAvatar: {
    backgroundColor: variables.primaryColor50,
    borderRadius: 4,
    padding: 8,
  },
  icon: {
    // width: "100%",
  },
});

export default styleSheet;
