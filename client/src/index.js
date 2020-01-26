import React from "react";
import ReactDOM from "react-dom";

import StyleProvider from "./config/style-provider";
import StoreProvider from "./config/store-provider";
import "./index.css";

// Builds the full application.
const Root = () => (
  <StoreProvider>
    <StyleProvider />
  </StoreProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
