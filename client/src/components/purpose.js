import React from "react";
import Panel from "./panel";
import styled from "styled-components";

const Purpose = styled(Panel)`
  background-color: ${p => {
    console.log(p);
    return p.theme.background;
  }};
`;

const PurposeBody = styled.div`
  margin: auto;
  font-size: 1.5em;
  text-align: left;
  max-width: 750px;
`;

export default () =>
  <Purpose title="What is this page?">
    <PurposeBody>
      Test
    </PurposeBody>
  </Purpose>