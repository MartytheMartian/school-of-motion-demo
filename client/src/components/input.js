import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0 10px;
  border: 0;
  height: 75%;
  width: calc(100% - 20px);
  box-sizing: border-box;
  border-radius: 4px;
`;

export default ({ onChange, placeholder, value }) =>
  <Input type="text" placeholder={placeholder} value={value} onChange={onChange} />