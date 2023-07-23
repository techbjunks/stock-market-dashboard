import styled from 'styled-components';
import { BaseStyleTitleProps } from "./types";

export const BaseStyleTitle = styled.h2<BaseStyleTitleProps>`
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#FFF"};
  font-weight: ${(props) => props.weight || "normal"};
  text-align: ${(props) => props.textAlign || "left"};
  ${(props) => props.className}
`;
