import {StyleRules, Theme} from "material-ui/styles";
import variables from "../../../assets/styles/variables";

const styleSheet = (theme: Theme): StyleRules => ({
  dropzoneWrapper: {
    width: "100%",
  },
  dropzoneArea: {
    // background: "red",
    border: `1px dashed ${variables.primaryColor}`,
    borderRadius: 6,
    color: variables.primaryColor,
    marginTop: 32,
    padding: 50,
    textAlign: "center",
    transition: "250ms all",
    width: "100%",
  },
  dropzoneAreaActive: {
    backgroundColor: variables.primaryColor50,
  },
  dropzoneAreaReject: {
    backgroundColor: variables.negativeLight,
    borderColor: variables.negative,
    color: variables.negative,
  },

  // UploadedFile
  CardContent: {
    alignItems: "center",
    display: "flex",
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  uploadImg: {
    marginBottom: 4,
    height: 30,
  },
  uploadText: {
    display: "block",
    lineHeight: "20px",
  },
  squareAvatar: {
    backgroundColor: variables.primaryColor50,
    borderRadius: 4,
    marginRight: 16,
    padding: 8,
  },
  title: {
    margin: 0,
  },
  subtitle: {
    fontWeight: "normal",
    margin: 0,
  },
  removeButton: {
    marginLeft: 16,
  },
});

export default styleSheet;
