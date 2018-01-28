import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
    loginCardWrapper: {
      backgroundColor: variables.primaryColor,
      height: "100%",
    },
    loginContainer: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginTop: 100,
    },
    logoImg: {
      width: 250,
    },
    loginTitle: {
      color: "#ffffff",
      marginTop: 40,
    },
    loginButton: {
      backgroundColor: "#ffffff",
      color: variables.primaryColor,
      marginTop: 40,
    },
    textFieldRoot: {
      backgroundColor: "#ffffff30",
      borderColor: "transparent",
      padding: 0,
    },
    textFieldInput: {
      color: "#ffffff",
      '&:focus': {
        borderColor: "#ffffff70",
        // backgroundColor: "#ffffff",
        // color: "#000000",
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.25), 0px 1px 5px 0px rgba(0, 0, 0, 0.05)",
      },
    },
    textFieldFormLabel: {
      // fontSize: 18,
      color: "#ffffff",
    },
});

export default styleSheet;
