import styled, { css } from "styled-components";

interface ButtonProps {
  width?: string;
  height?: number;
  variant: 'primary' | 'secondary';
}

const primaryStyles = css`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #0043a3;
  }
`;

const secondaryStyles = css`
  background-color: #f0f0f0;
  color: #333;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #aaa;
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => (props.width === 'Full' ? '100%' : '150px')};
  height: 45px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  ${(props) => (props.variant === "primary" ? primaryStyles : secondaryStyles)};
`;
