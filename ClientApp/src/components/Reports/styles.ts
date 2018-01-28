import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
  RightSidebar: {
    borderRadius: 0,
    bottom: 0,
    position: "fixed",
    right: 0,
    width: variables.RightSidebarWidth,
    top: variables.TopNavHeight,
  },
  switchWrapper: {
    marginTop: 0,
  },
  withRightSidebar: {
    width: `calc(100% - ${variables.RightSidebarWidth})`,
  },
  collapse: {
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 10,
    width: "100%",
  },
  formControlLabel: {
    marginTop: 0,
    width: "100%",
  },
  nameField: {
    marginBottom: 24,
  },
  counter: {
    color: variables.primaryColor,
    fontSize: 12,
    position: "absolute",
    bottom: 15,
    right: 15,
  },
  label: {
    display: "inline-flex",
  },
  largeText: {
    cursor: "pointer",
    display: "block",
    fontSize: 24,
    lineHeight: 2,
  },
  group: {
    border: `1px solid ${variables.borderColor}`,
    borderRadius: 4,
    display: "flex",
    marginTop: 8,
    padding: "4px 12px",
    width: "100%",
  },
  formControl: {
    marginBottom: 24,
    width: "100%",
  },
  formLabel: {
    fontSize: 14 * .75,
  },
  noMargin: {
    marginRight: -16,
  },
  cancelButton: {
    marginRight: 16,
  },


  // stickyHeader: {
  //   position: "sticky",
  //   top: 100,
  // },
  // otherclass: {
  //   background: "green",
  //   position: "fixed",
  //   top: 100,
  //   left: 100,
  //   right: 100,
  // },
  sortableHeader: {
    cursor: "pointer",
    transition: "250ms all",
    "&:hover": {
      backgroundColor: variables.borderColor,
      color: "#000",
    },
  },
  sortableHeaderActive: {
    color: "black",
    fontWeight: 700,
  },
  svg: {
    height: 18,
    marginLeft: 10,
    position: "relative",
    top: 4,
  },
});

export default styleSheet;
