import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
    logo: {
        backgroundColor: variables.primaryColor,
        height: 90,
        padding: "20px",
        width: variables.drawerWidth,
    },
    logoImg: {
        maxWidth: "100%",
    },
    BreadcrumbList: {
      fontSize: 12,
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    BreadcrumbListItem: {
      display: "inline-block",
      fontWeight: "bold",

      "&:after": {
        content: "'>'",
        marginLeft: 5,
        marginRight: 5,
      },
      "&:last-child:after": {
        content: "''",
      },
    },
    BreadcrumbListItemLink: {
      color: variables.primaryColor,
      textDecoration: "none",

      "&:hover": {
        textDecoration: "underline",
      },
    },
});

export default styleSheet;
