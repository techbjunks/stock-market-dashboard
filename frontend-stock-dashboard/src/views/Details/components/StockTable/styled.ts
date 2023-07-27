import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const RowItem = styled.div`
  margin: 16px 0;
`

interface SkeletonItemType {
  width?: string,
  height?: string,
}

export const SkeletonItem = styled.div<SkeletonItemType>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "16px"};
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 8px;
`;