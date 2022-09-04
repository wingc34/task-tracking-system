import React from "react";
import styled from "styled-components/macro";

const SelectContainer = styled.select`
    padding: 4px 8px;
    position: relative;
    left: calc(100% - 8em);
    margin-bottom: 12px;
`

export default function UserPicker({ usersname, onSelectName }) {
  return (
    <SelectContainer name="usersname" id="usersname" onChange={onSelectName}>
      {usersname.map((item, i) => (
        <option value={item.value} key={`usersname-${i}`}>
          {item.Name}
        </option>
      ))}
    </SelectContainer>
  );
}
