import { useEffect, useReducer } from "react";
import { initialState } from "./constant";
import { fetchStockChart } from "../../../../api";
import Title from "../../../../common/components/Title/Title";
import LineChart from "../../../../common/components/Chart/Line/index";
import fetchChartReducer from "../../../../api/reducer/stock-reducers/stock-chart";

interface StockChartType {
  symbol: string,
}

const StockChart = ({ symbol }: StockChartType) => {
  const [{ data, loading }, dispatch] = useReducer(fetchChartReducer, initialState);

  useEffect(() => {
    const getStockChartData = async () => {
      await fetchStockChart(symbol, dispatch);
    }
    getStockChartData();
  }, [symbol]);

  return (
    <>
      <Title as="h4" size="medium" color="#2a2e39">
        Chart
      </Title>
      {!loading && data && <LineChart chartData={data} />}
    </>
  );
};

export default StockChart;
