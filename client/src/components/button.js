import React from "react";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  min-height: 30px;
  line-height: 30px;
  text-align: center;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: ${p => {
    if (p.alert) {
      return p.disabled ? p.theme.alertHover : p.theme.alert;
    }

    return p.disabled ? p.theme.primaryHover : p.theme.primary;
  }};
  color: white;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2),
    0px 2px 2px 0px rgba(0,0,0,0.14),
    0px 3px 1px -2px rgba(0,0,0,0.12);
  cursor: ${p => p.disabled ? "default" : "pointer"};

  &:hover {
    background-color: ${p => p.alert ? p.theme.alertHover : p.theme.primaryHover}
  }
`;

export default ({ alert, children, classes, disabled, style, onClick = () => { } }) =>
  <Button alert={alert} disabled={disabled}
    classes={classes} onClick={disabled ? () => { } : onClick} style={style}>
    {children}
  </Button>;