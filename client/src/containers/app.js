import React from "react";
import styled from "styled-components";

import Demo from "./demo";
import ErrorDisplay from "./error-display";
import Author from "../components/author";
import Explanation from "../components/explanation";

const App = styled.div`
`;

export default () =>
  <App>
    <ErrorDisplay>
      <Demo />
      <Explanation />
      <Author />
    </ErrorDisplay>
  </App>;