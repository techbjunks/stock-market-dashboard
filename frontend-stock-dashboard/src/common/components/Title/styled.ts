import styled from 'styled-components';
import { BaseStyleTitleProps } from "./types";

const getSize = (size:string):string => {
  switch(size){
    case 'large':
      return '60px';
    case 'medium':
      return '36px';
    case 'small':
      return '20px';
    default:
      return '24px';
  }
}

export const BaseStyleTitle = styled.h2<BaseStyleTitleProps>`
  color: ${(props) => props.color || "#FFF"};
  font-weight: ${(props) => props.weight || "normal"};
  text-align: ${(props) => props.textAlign || "left"};
  font-size: ${(props) => props.size && getSize(props.size)};
  ${(props) => props.className}
`;
