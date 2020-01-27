import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 0 10px;
  border: 0;
  height: 100%;
  color: black;
  width: calc(100% - 20px);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: .8em;
`;

export default ({ disabled, onChange, options, value }) =>
  <Select disabled={disabled} value={value} onChange={e => onChange(options[e.target.selectedIndex].id)}>
    {
      !options ? undefined : options.map(option =>
        <option key={option.id} value={option.value}>
          {option.value}
        </option>)
    }
  </Select>;