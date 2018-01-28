import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
  success: {
    color: variables.success,
  },
  error: {
    color: variables.error,
  },
});

export default styleSheet;
