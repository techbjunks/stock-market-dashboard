import styled, { keyframes } from 'styled-components';

export const AutocompleteList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 70%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 98%;
  }
`;

export const AutocompleteListItem = styled.li`
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #fce5cd;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const AutocompleteListItemSkeleton = styled.li`
  opacity: 1;
  width: 100%;
  height: 24px;
  border-radius: 4px;
  margin-bottom: 8px;
  background-size: 800px 100%;
  transition: opacity 0.5s ease-in-out;
  animation: ${shimmerAnimation} 1s linear infinite;
  background: linear-gradient(to right, #f0f0f0 8%, #ddd 18%, #f0f0f0 33%);
`;