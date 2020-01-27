import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 20px 0;

  .panel-body {
    font-size: 1.25em;
  }

  .panel-content {
    max-width: 1200px;
  }

  .panel-title {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    font-size: 1.75em;
  }
`;

export default ({ title, children, style, className }) =>
  <Panel style={style} className={className}>
    <div className="panel-content">
      <div className="panel-title">
        {title}
      </div>
      <div className="panel-body">
        {children}
      </div>
    </div>
  </Panel>;