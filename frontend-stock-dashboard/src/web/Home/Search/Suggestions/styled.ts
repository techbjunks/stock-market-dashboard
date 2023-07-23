import styled from 'styled-components';

export const AutocompleteList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const AutocompleteListItem = styled.li`
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #fce5cd;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;