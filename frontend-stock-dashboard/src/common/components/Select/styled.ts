import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  min-width: 160px;
`;

export const SelectInput = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
`;

export const OptionCheckbox = styled.input`
  margin-right: 8px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
`;

export const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;