import { red } from "@material-ui/core/colors";
import {
  StylesProvider,
  jssPreset,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";

// A custom theme for this app
let theme = createMuiTheme({
  direction: "rtl",
  typography: {
    fontFamily: ["IRANSans", '"Segoe UI"', "sans-serif"].join(","),
  },
  palette: {
    primary: {
      //main: "#54a7c8", //asli
      main: "#376374",
    },
    secondary: {
      //main: "#795548",
      main: "#d84315",
      //main: "#376374", //asli
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

theme = responsiveFontSizes(theme);
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default (props) => {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StylesProvider>
  );
};
