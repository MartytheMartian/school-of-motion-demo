import React from "react";
import { ThemeProvider } from "styled-components";
import App from "../containers/app";

// Create the theme.
const theme = {
  primary: "#253C78",
  primaryHover: "#253C78",
  primaryInverse: "#FFFFFFF",
  alert: "#C44A46",
  alertHover: "#C44A46DD",
  trim: "FFFFFF80",
  trimShadow: "FFFFFF80"
};

export default () =>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>;