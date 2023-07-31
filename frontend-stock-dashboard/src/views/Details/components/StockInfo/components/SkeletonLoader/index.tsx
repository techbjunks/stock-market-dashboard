import theme from "../../../../../../theme";
import { InfoContainer, SkeletonItem } from "../../styled";
import Title from "../../../../../../common/components/Title";
import FlexBox from "../../../../../../common/components/Box/Flex";

const SkeletonLoader = () => (
  <FlexBox gap="40px" flexDirection="row">
    <InfoContainer>
      <Title as="h4" size="medium" color={theme.typography.heading.color}>
        Latest Quote - <SkeletonItem width="100px" />
        <SkeletonItem width="80px" />
      </Title>
      <SkeletonItem width="100%" height="16px" />
      <SkeletonItem width="100%" height="16px" />
      <SkeletonItem width="100%" height="16px" />
      <SkeletonItem width="100%" height="16px" />
      <SkeletonItem width="100%" height="16px" />
      <SkeletonItem width="100%" height="16px" />
    </InfoContainer>
    <InfoContainer>
      <Title as="h4" size="medium" color={theme.typography.heading.color}>
        Chart
      </Title>
    </InfoContainer>
  </FlexBox>
);

export default SkeletonLoader;
