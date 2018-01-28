import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
  "@keyframes rotating": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  loadingSpinner: {
    animation: "rotating 3s linear infinite",
    backgroundColor: variables.primaryColor,
    height: 80,
    marginTop: 20,
    width: 80,
  },
  loadingSpinnerIcon: {
      transform: "scale(2.5)",
  },
});

export default styleSheet;
