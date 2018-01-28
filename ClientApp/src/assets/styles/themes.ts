import { grey } from "material-ui/colors";
import createMuiTheme from "material-ui/styles/createMuiTheme";
import createPalette from "material-ui/styles/createPalette";
import createTypography from "material-ui/styles/createTypography";
import variables from "./variables";

interface IStyles {
  classes: any;
}

// Create Initial Theme with Our Primary and Accent Colors
const themeWithPalette = createMuiTheme({
  palette: createPalette({
    type: "light",
    primary: {
      50: variables.primaryColor50,
      100: variables.primaryColor100,
      200: variables.primaryColor200,
      300: variables.primaryColor300,
      400: variables.primaryColor400,
      500: variables.primaryColor,
      600: variables.primaryColor600,
      700: variables.primaryColor700,
      800: variables.primaryColor800,
      900: variables.primaryColor900,
      A100: variables.primaryColorA100,
      A200: variables.primaryColorA200,
      A400: variables.primaryColorA400,
      A700: variables.primaryColorA700,
      contrastDefaultColor: "light",
    },
    secondary: {
      50: variables.secondaryColor,
      100: variables.secondaryColor,
      200: variables.secondaryColor,
      300: variables.secondaryColor,
      400: variables.secondaryColor,
      500: variables.secondaryColor,
      600: variables.secondaryColor,
      700: variables.secondaryColor,
      800: variables.secondaryColor,
      900: variables.secondaryColor,
      A100: variables.secondaryColor,
      A200: variables.secondaryColor,
      A400: variables.secondaryColor,
      A700: variables.secondaryColor,
      contrastDefaultColor: "light",
    },
  }),

  // Build out Global overrides for this default theme.
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 5,
        padding: `${variables.spacing * 2}px ${variables.spacing * 4}px`,
      },
      raised: {
        backgroundColor: "#FFF",
        boxShadow: `inset 0 0 0 1px rgba(0,0,0,.25)`,
      },
      raisedPrimary: {
        boxShadow: "none",
      },
      label: {
        fontSize: 14,
        textTransform: "none",
      },
    },

    MuiChip: {
      root: {
        backgroundColor: grey[300],
        borderRadius: 4,
        fontSize: "12px",
        height: 20,
      },
      label: {
        paddingLeft: variables.spacing,
        paddingRight: variables.spacing,
      },
    },

    MuiAppBar: {
        root: {
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: grey[300],
            height: "90px",
            flexDirection: "row",
            // width: `calc(100% - ${variables.drawerWidth})`,
        },
        positionFixed: {
            // left: variables.drawerWidth,
        },
    },
    MuiToolbar: {
      root: {
        height: variables.TopNavHeight,
        justifyContent: "space-between",
        width: `calc(100% - ${variables.drawerWidth})`,
      },
    },
    MuiDrawer: {
        paper: {
            top: 90,
            width: variables.drawerWidth,
        },
    },

    MuiPaper: {
      rounded: {
        borderRadius: 5,
      },
      shadow2: {
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.05), 0px 1px 5px 0px rgba(0, 0, 0, 0.05)",
      },
    },

    // MuiCard: {
    //   root: {
    //     marginTop: "100px",
    //   },
    // },

    MuiCardHeader: {
      content: {
        flex: "1 0 auto",
      },
    },

    MuiCardActions: {
      root: {
        height: "auto",
        marginTop: `${variables.spacing * 3}px`,
        padding: 0,
      },
    },

    MuiListItem: {
      gutters: {
        paddingLeft: variables.spacing * 4,
        paddingRight: variables.spacing * 4,
      },
      button: {
        // textDecoration: "none",

        "&:hover": {
          backgroundColor: `rgba(${variables.primaryColor50}, 0.5)`,
          color: variables.primaryColor,
          // textDecoration: "underline",
          // // Reset on mouse devices
          // "@media (hover: none)": {
          //   backgroundColor: "transparent",
          // },
          // "&$disabled": {
          //   backgroundColor: "transparent",
          // },
        },
      },
    },

    MuiListItemText: {
      inset: {
        "&:first-child": {
          paddingLeft: variables.spacing * 3,
        },
      },
    },

    MuiLinearProgress: {
      root: {
        backgroundColor: `${grey[200]} !important`,
        width: "100%",
      },
    },
    MuiFormLabel: {
      root: {
        textTransform: "uppercase",
        fontSize: 14,
      },
      focused: {
        color: variables.primaryColor,
      },
    },
//       formControl: {
//         left: "10px",
//         top: "10px",
//       },
//       shrink: {
//         textTransform: "uppercase",
//         fontWeight: "bold",
//         fontSize: "14px",
//         color: "#ABABAB",
//         left: "0px",
//         top: "6px",
//       },
//     },
    MuiFormGroup: {
      root: {
        marginTop: `${variables.spacing * 3}px`,
      },
    },
    MuiFormControl: {
      root: {
        marginBottom: 20,
        marginTop: `${variables.spacing * 3}px`,
      },
    },
    MuiInput: {
      root: {
        background: "#FFF",
        border: `1px solid ${grey[300]}`,
        borderRadius: 4,
        // padding: 16,
        transition: "250ms all",
      },

      input: {
        boxSizing: "inherit",
        padding: 16,
      },

      inputSingleline: {
        height: 46,
      },

      focused: {
        backgroundColor: "#FFF",
        borderColor: `${variables.primaryColor}`,
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.05), 0px 1px 5px 0px rgba(0, 0, 0, 0.05)",
      },

      error: {
        borderColor: variables.error,
      },

      inputMultiline: {
        padding: 16,
        width: "100%",
      },
    },

    MuiFormHelperText: {
      root: {
        bottom: -16,
        position: "absolute",
        left: 0,
      },
    },

    MuiSwitch: {
      default: {
        height: 28,
      },
    },

    MuiSelect: {
      select: {
        height: 46,
        padding: 16,
        "&:focus": {
          backgroundColor: "#FFF",
          borderRadius: 4,
        },
      },
      selectMenu: {
        lineHeight: "16px",
      },
      icon: {
        top: 10,
      },
    },
    MuiInputAdornment: {
      root: {
        "label + div > &": {
          backgroundColor: "#ff0000",
        },
      },
    },

    MuiSnackbarContent: {
      root: {
        paddingRight: 0,
      },
    },

    MuiTableHead: {
      root: {
        backgroundColor: variables.defaultComponentBgColor,
        fontSize: 14,
      },
    },

    MuiTableRow: {
      root: {

        "&:nth-child(even)": {
          background: variables.tableRow,
        },
      },
    },

    MuiTableFooter: {
      root: {
        borderTop: `2px solid ${variables.borderColor}`,
        color: "#000",
        fontSize: 13,
        fontWeight: 700,
      },
    },
  },
});

// Here we can make all Configuration changes that we need.
function createDefaultTheme(initialTheme: any) {
  const typography = createTypography(initialTheme.palette, {
    // System font
    fontFamily:
      '"Lato","-apple-system,system-ui,BlinkMacSystemFont","Helvetica Neue",Arial,sans-serif',
  });

  return {
    ...initialTheme,
    typography: {
      ...typography,
      display1: {
        ...typography.display1,
        fontSize: "2rem",
      },
      headline: {
        ...typography.headline,
        fontSize: "1.5rem",
      },
      title: {
        ...typography.title,
        fontSize: "1.5rem",
        fontWeight: 400,
      },
      subheading: {
        ...typography.subheading,
        fontSize: "1.25rem",
      },
      body1: {
        ...typography.body1,
        fontSize: "1rem",
      },
      caption: {
        ...typography.caption,
        fontSize: "0.75rem",
      },
      button: {
        ...typography.caption,
        fontWeight: 400,
      },
    },

    palette: {
      ...initialTheme.palette,
      background: {
        ...initialTheme.palette.background,
        // default: "#ce8113",
        appBar: "#fff",
      },
    },
  };
}

const defaultTheme = createDefaultTheme(themeWithPalette);

export {
  IStyles,
};

export default defaultTheme;
