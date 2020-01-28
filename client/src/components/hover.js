import React from "react";
import styled from "styled-components";

const Hover = styled.div`
  display: ${p => p.visible ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000044;
  z-index: 1;
`;

const HoverChildren = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export default ({ children, classes, style, visible }) =>
  <Hover classes={classes} style={style} visible={visible}>
    <HoverChildren>
      {children}
    </HoverChildren>
  </Hover>