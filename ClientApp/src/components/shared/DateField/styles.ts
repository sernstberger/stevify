import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
  dateField: {
    backgroundColor: "#FFF",
    alignItems: "stretch",
    background: variables.defaultComponentBgColor,
  },
  dateFieldInput: {
    borderRadius: "4px 0 0 4px",
  },
  adornment: {
    alignItems: "center",
    backgroundColor: variables.defaultComponentBgColor,
    borderLeft: `1px solid ${variables.borderColor}`,
    borderRadius: "0 4px 4px 0",
    color: variables.primaryColor,
    display: "flex",
    height: 48,
    padding: 10,
    width: 45,
  },
  date: {
    marginTop: 0,
  },
});

export default styleSheet;
