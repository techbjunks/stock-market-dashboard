import Chart from './Graph';
import { initialState } from "./constant";
import { useEffect, useReducer } from "react";
import { fetchStockChart } from "../../../../api";
import ErrorBoundary from "../../../../common/ui/ErrorBoundary";
import Title from "../../../../common/components/Title/Title";
import fetchChartReducer from "../../../../api/reducer/stock-reducers/stock-chart";

interface StockChartType {
  symbol: string,
  stockName: string,
}

const StockChart = ({ symbol, stockName }: StockChartType) => {
  const [{ data, loading }, dispatch] = useReducer(fetchChartReducer, initialState);

  useEffect(() => {
    fetchStockChart(symbol, dispatch, 3600000);
  }, [symbol]);
  return (
    <ErrorBoundary>
      <Title as="h4" size="medium" color="#2a2e39">
        {stockName} Chart
      </Title>
      {!loading && data && <Chart chartData={data} column={10} />}
    </ErrorBoundary>
  );
};

export default StockChart;
