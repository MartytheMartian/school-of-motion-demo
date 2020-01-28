import React from "react";
import styled from "styled-components";

import Button from "./button";

const DemoRow = styled.div`
  display: flex;
  justify-content: row;
  width: 100%;
  min-height: 40px;
  padding-left: 10px;
  cursor: ${p => p.deletable ? "pointer" : "default"};
  border-radius: 5px;

  &:hover {
    background-color: ${p => p.deletable ? p.theme.secondary : "default"};
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default ({ course, disabled, firstName, hover, lastName, onDelete, onSubmit, style }) => {
  const itemClass = hover ? "item" : undefined;
  return (
    <DemoRow style={style} hover={hover} onClick={onDelete ? onDelete : undefined} deletable={onDelete !== undefined}>
      <div className={itemClass} style={{ width: "25%" }}>{firstName}</div>
      <div className={itemClass} style={{ width: "25%" }}>{lastName}</div>
      <div className={itemClass} style={{ width: "30%" }}>{course}</div>
      <div style={{ width: "20%" }}>
        {
          onSubmit ? <Button disabled={disabled} onClick={onSubmit}>Submit</Button> : undefined
        }
      </div>
    </DemoRow >);
};