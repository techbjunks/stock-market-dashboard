import { FlexContainer } from "./styled";
import { FlexProps } from "./types";

const FlexBox = (
  children: React.ReactNode,
  {
    gap,
    alignItems,
    justifyContent,
    flexShrink,
    flexWrap,
    flexBasis,
    flexDirection,
    flexGrow,
  }: FlexProps
): JSX.Element => {
  return (
    <FlexContainer
      gap={gap}
      flexWrap={flexWrap}
      flexGrow={flexGrow}
      flexBasis={flexBasis}
      flexShrink={flexShrink}
      alignItems={alignItems}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
    >
      {children}
    </FlexContainer>
  );
};

export default FlexBox;
