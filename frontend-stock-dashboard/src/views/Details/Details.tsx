import Header from "../Header";
import { useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";

import { StockTable } from "./components";
import { initialState } from "./constant";
import { fetchStockDetail } from "../../api";
import ErrorBoundary from "../../common/ui/ErrorBoundary";
import SelectComponent from "../../common/components/Select/Select";
import fetchStockDetailReducer from "../../api/reducer/stockdetails";


const Home = () => {
  const { symbol } = useParams();
  const [{ data, loading, error }, dispatch] = useReducer(
    fetchStockDetailReducer,
    initialState
  );

  useEffect(() => {
    fetchStockDetail(symbol, dispatch);
  }, [symbol]);

  const updateAPIInterval = (value: [] | string):void => {
    console.log('value', value);
  }

  return (
    <ErrorBoundary>
      <Header title="Stock Detail" />
      <SelectComponent options={[
        {
          label: '5 min',
          value: '5'
        },
        {
          label: '10 min',
          value: '10'
        }
      ]}
      onChange={updateAPIInterval}
      />
      <StockTable isLoading={loading} data={data} key={data.Symbol} />
    </ErrorBoundary>
  )
};

export default Home;
