import React from "react";
import styled from "styled-components";

const DemoRow = styled.div`
  display: flex;
  justify-content: row;
  width: 100%;
  min-height: 40px;
`;

export default ({ course, firstName, lastName, onSubmit, style }) =>
  <DemoRow style={style}>
    <div style={{ width: "25%" }}>{firstName}</div>
    <div style={{ width: "25%" }}>{lastName}</div>
    <div style={{ width: "30%" }}>{course}</div>
    <div style={{ width: "20%" }}>
      {
        onSubmit ? "Submit" : undefined
      }
    </div>
  </DemoRow >