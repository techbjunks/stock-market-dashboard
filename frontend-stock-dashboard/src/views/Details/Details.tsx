import Header from "../Header";
import { useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";

import { StockTable } from "./components";
import { initialState } from "./constant";
import { fetchStockDetail } from "../../api";
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

  return (
    <>
      <Header title="Stock Detail" />
      <StockTable isLoading={loading} data={data} key={data.Symbol} />
    </>
  );
};

export default Home;
