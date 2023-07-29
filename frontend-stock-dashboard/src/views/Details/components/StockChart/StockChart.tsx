import { useEffect, useReducer } from "react";
import { initialState } from "./constant";
import { fetchStockChart } from "../../../../api";
import Chart from './Graph';
import Title from "../../../../common/components/Title/Title";
import LineChart from "../../../../common/components/Chart/Line/index";
import fetchChartReducer from "../../../../api/reducer/stock-reducers/stock-chart";

interface StockChartType {
  symbol: string,
  stockName: string,
}

const StockChart = ({ symbol, stockName }: StockChartType) => {
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
      {!loading && data && <Chart chartData={data} />}
    </>
  );
};

export default StockChart;
