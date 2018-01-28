import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
  CardContent: {
    alignItems: "center",
    display: "flex",
    // justifyContent: "space-between",
    paddingTop: 32,
    transition: "250ms all",
    "&:last-child": {
      paddingBottom: 32,
    },
  },
  clickAllowed: {
    cursor: "pointer",
    transition: "250ms all",

    "&:hover": {
      // borderRadius: 4,
      boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.15), 0px 1px 5px 0px rgba(0, 0, 0, 0.15)",
    },
  },

  clickNotAllowed: {
    cursor: "not-allowed",
  },

  squareAvatar: {
    backgroundColor: variables.primaryColor50,
    borderRadius: 4,
    padding: 8,
  },
  icon: {
    // width: "100%",
  },

  statusIconBg: {
    backgroundColor: "#000",
    borderRadius: "50%",
    color: "#fff",
    height: 18,
    padding: 2,
    position: "absolute",
    right: -8,
    top: -8,
    width: 18,
  },
  statusIcon: {
    height: 14,
    width: 14,
  },
});

export default styleSheet;
