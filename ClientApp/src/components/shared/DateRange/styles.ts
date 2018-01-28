import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
  dateField: {
    // alignItems: "normal",
    alignItems: "stretch",
    background: variables.defaultComponentBgColor,
    borderRadius: 4,
  },
  adornment: {
    color: variables.primaryColor,
    height: 53,
    padding: 10,
    width: 45,
  },
});

export default styleSheet;
