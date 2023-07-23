import styled from 'styled-components';
import { BaseStyleTextProps } from "./types";

export const BaseStyleText = styled.div<BaseStyleTextProps>`
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#FFF"};
  font-weight: ${(props) => props.weight || 600};
  text-align: ${(props) => props.textAlign || 'left'};
  ${(props) => props.className}
`;
