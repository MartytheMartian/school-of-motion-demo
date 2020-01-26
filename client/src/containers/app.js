import React from "react";
import styled from "styled-components";

import Demo from "./demo";
import ErrorDisplay from "./error-display";

const App = styled.div`
`;

export default () =>
  <App>
    <ErrorDisplay>
      <Demo />
    </ErrorDisplay>
  </App>;