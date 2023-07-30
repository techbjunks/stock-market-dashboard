import { useEffect, useReducer } from "react";
import Chart from './Graph';
import { initialState } from "./constant";
import { fetchStockChart } from "../../../../api";
import Title from "../../../../common/components/Title/Title";
import fetchChartReducer from "../../../../api/reducer/stock-reducers/stock-chart";

interface StockChartType {
  symbol: string,
  stockName: string,
}

const StockChart = ({ symbol, stockName }: StockChartType) => {
  const [{ data, loading }, dispatch] = useReducer(fetchChartReducer, initialState);

  useEffect(() => {
    const getStockChartData = async () => {
      await fetchStockChart(symbol, dispatch, 3600000);
    }
    getStockChartData();
  }, [symbol]);
  console.log('data', data);
  return (
    <>
      <Title as="h4" size="medium" color="#2a2e39">
        {stockName} Chart
      </Title>
      {!loading && data && <Chart chartData={data} />}
    </>
  );
};

export default StockChart;
