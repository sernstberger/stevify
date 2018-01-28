import variables from "../../../assets/styles/variables";

const styleSheet = {
  paddingFix: {
    paddingBottom: "30px !important",
    paddingTop: "5px !important",
  },
  noPadding: {
    paddingBottom: "0 !important",
  },
  alignRight: {
    paddingRight: "0",
    textAlign: "right",
  },
  buttonGroup: {
    marginBottom: 16,
    marginTop: -16,
  },
  activeButton: {
    backgroundColor: variables.primaryColor50,
    borderRadius: "0 0 5px 5px",
    boxShadow: "none",
    color: variables.primaryColor,
    padding: "20px 8px",
    pointerEvents: "none",
  },
  button: {
    borderRadius: "0 0 5px 5px",
    padding: "20px 8px",
  },
};

export default styleSheet;
