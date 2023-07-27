import Title from "../../../../common/components/Title/Title";
import LineChart from "../../../../common/components/Chart/Line";

const StockChart = () => {
  return (
    <>
      <Title as="h4" size="medium" color="#2a2e39">
        Chart
      </Title>
      <LineChart />
    </>
  );
};

export default StockChart;
