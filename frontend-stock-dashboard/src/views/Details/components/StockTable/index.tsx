import theme from "../../../../theme";
import { useMobile } from "../../../../hooks";
import { getStockPrice } from "../../../../utils";
import Title from "../../../../common/components/Title";
import { StockTableProps, InfoItemType } from "./types";
import Text from "../../../../common/components/Text/Text";
import FlexBox from "../../../../common/components/Box/Flex/Flex";
import { InfoContainer, RowItem, SkeletonItem } from "./styled";

const InfoItem = ({ title, value, color }: InfoItemType): JSX.Element => (
  <RowItem>
    <Text fontSize={theme.typography.label.fontSize} weight="200" color={color}>
      {title.length ? `${title} -` : null} {value}
    </Text>
  </RowItem>
);

const SkeletonLoader = () => (
  <FlexBox gap="40px" flexDirection="row">
    <InfoContainer>
      <Title as="h4" size="medium" color="#2a2e39">
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
      <Title as="h4" size="medium" color="#2a2e39">
        Chart
      </Title>
    </InfoContainer>
  </FlexBox>
);

const StockTable = ({ data, isLoading }: StockTableProps): JSX.Element => {
  const isMobile = useMobile(768);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <FlexBox
      gap={isMobile ? "8px" : "40px"}
      flexDirection={isMobile ? "column" : "row"}
    >
      <InfoContainer>
        <Title as="h4" size="medium" color="#2a2e39">
          Latest Quote - {data.Name} {data.Symbol} {data.Country}
        </Title>
        <InfoItem title="" value={data.Description} color="#2a2e39" />
        <InfoItem
          title="Stock Price"
          value={getStockPrice(data.EPS, data.PERatio, data.Currency)}
          color="#5f12c7"
        />
        <InfoItem title="PE Ratio" value={data.PERatio} color="#5f12c7" />
        <InfoItem title="Exchange" value={data.Exchange} color="#5f12c7" />
        <InfoItem title="Industry" value={data.Industry} color="#5f12c7" />
        <InfoItem
          title="Market Cap"
          color="#5f12c7"
          value={`${data.MarketCapitalization} ${data.Currency}`}
        />
      </InfoContainer>
      <InfoContainer>
        <Title as="h4" size="medium" color="#2a2e39">
          Chart
        </Title>
      </InfoContainer>
    </FlexBox>
  );
};

export default StockTable;
