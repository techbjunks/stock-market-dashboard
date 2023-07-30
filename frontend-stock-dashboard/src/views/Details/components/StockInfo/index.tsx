import Chart from '../StockChart';
import theme from "../../../../theme";
import { useMobile } from "../../../../hooks";
import { getStockPrice } from "../../../../utils";
import { InfoContainer, RowItem } from "./styled";
import Title from "../../../../common/components/Title";
import { StockTableProps, InfoItemType } from "./types";
import SkeletonLoader from './components/SkeletonLoader';
import Text from "../../../../common/components/Text/Text";
import FlexBox from "../../../../common/components/Box/Flex/Flex";

const InfoItem = ({ title, value = '', color }: InfoItemType): JSX.Element => (
  <RowItem>
    <Text fontSize={theme.typography.label.fontSize} weight="200" color={color}>
      {title.length ? `${title} -` : null} {value}
    </Text>
  </RowItem>
);

const StockTable = ({ data, isLoading }: StockTableProps): JSX.Element => {
  const isMobile = useMobile(768);

  if (isLoading || (Object.keys(data).length <= 1)) {
    return <SkeletonLoader />;
  }

  return (
    <FlexBox
      gap={isMobile ? "8px" : "40px"}
      flexDirection={isMobile ? "column" : "row"}
    >
      <InfoContainer>
        <Title as="h4" size="medium" color={theme.typography.heading.color}>
          Latest Quote - {data.Name} {data.Symbol} {data.Country}
        </Title>
        <InfoItem title="" value={data.Description} color={theme.typography.heading.color} />
        <InfoItem
          title="Stock Price"
          color={theme.typography.highlight.color}
          value={getStockPrice(data.EPS, data.PERatio, data.Currency)}
        />
        <InfoItem title="PE Ratio" value={data.PERatio} color={theme.typography.highlight.color} />
        <InfoItem title="Exchange" value={data.Exchange} color={theme.typography.highlight.color} />
        <InfoItem title="Industry" value={data.Industry} color={theme.typography.highlight.color} />
        <InfoItem
          title="Market Cap"
          color={theme.typography.highlight.color}
          value={`${data.MarketCapitalization} ${data.Currency}`}
        />
      </InfoContainer>
      <InfoContainer>
        {data.Symbol && <Chart symbol={data.Symbol} stockName={data.Name} />}
      </InfoContainer>
    </FlexBox>
  );
};

export default StockTable;
