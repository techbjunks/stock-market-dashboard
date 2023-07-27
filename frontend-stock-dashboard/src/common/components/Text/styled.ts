import styled from 'styled-components';
import { TextProps } from "./types";

export const BaseStyleText = styled.div<TextProps>`
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#FFF"};
  font-weight: ${(props) => props.weight || 400};
  text-align: ${(props) => props.textAlign || 'left'};
  ${(props) => props.className}
`;
