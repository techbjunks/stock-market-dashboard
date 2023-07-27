import styled from "styled-components";
import { FlexProps } from "./types";

export const FlexContainer = styled.div<FlexProps>`
  display: flex;
  gap: ${(props) => props.gap && props.gap};
  flex-shrink: ${(props) => props.flexShrink || 1};
  flex-grow: ${(props) => props.flexGrow || 0};
  flex-basis: ${(props) => props.flexBasis || "auto"};
  flex-wrap: ${(props) => props.flexWrap && props.flexWrap};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems && props.alignItems};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
`;
