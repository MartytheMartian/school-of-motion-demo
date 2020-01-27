import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0 10px;
  border: 0;
  height: 100%;
  width: calc(100% - 20px);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: .8em;
`;

export default ({ disabled, onChange, placeholder, value }) =>
  <Input type="text" placeholder={placeholder} value={value}
    disabled={disabled} onChange={e => onChange(e.target.value)} />;