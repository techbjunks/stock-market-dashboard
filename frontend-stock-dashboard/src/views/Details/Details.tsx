import Header from "../Header";
import { useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";

import { getStockDetail } from "../../utils";
import {
  StockDetailState,
  StockDetailActionTypes,
} from "../../api/types/stockdetails";
import fetchStockDetailReducer from '../../api/reducer/stockdetails';
import { StockDetail as StockDetailType } from "../../common/types/stock";

const initialStockData = {
  Symbol: "",
  AssetType: "",
  Name: "",
  Description: "",
  CIK: "",
  Exchange: "",
  Currency: "",
  Country: "",
  Sector: "",
  Industry: "",
  Address: "",
  FiscalYearEnd: "",
  LatestQuarter: "",
  MarketCapitalization: "",
  EBITDA: "",
  PERatio: "",
  PEGRatio: "",
  BookValue: "",
  DividendPerShare: "",
  DividendYield: "",
  EPS: "",
  RevenuePerShareTTM: "",
  ProfitMargin: "",
  OperatingMarginTTM: "",
  ReturnOnAssetsTTM: "",
  ReturnOnEquityTTM: "",
  RevenueTTM: "",
  GrossProfitTTM: "",
  DilutedEPSTTM: "",
  QuarterlyEarningsGrowthYOY: "",
  QuarterlyRevenueGrowthYOY: "",
  AnalystTargetPrice: "",
  TrailingPE: "",
  ForwardPE: "",
  PriceToSalesRatioTTM: "",
  PriceToBookRatio: "",
  EVToRevenue: "",
  EVToEBITDA: "",
  Beta: "",
  SharesOutstanding: "",
  DividendDate: "",
  ExDividendDate: "",
};

const initialState: StockDetailState = {
  loading: false,
  data: initialStockData,
  error: false,
};

const Home = () => {
  const { symbol } = useParams();
  const [state, dispatch] = useReducer(fetchStockDetailReducer, initialState);

  useEffect(() => {
    console.log(symbol);
    const fetchStockDetail = async (query: string) => {
        try {
          dispatch({ type: StockDetailActionTypes.FETCH_START });
          // const response = await fetch(getStockResults(query));
          const response = await fetch(
            "https://run.mocky.io/v3/04619120-b4c2-4b5f-8f49-8f5b7fe81146"
          ); // remove this hard code before demo
          const data = await response.json();
          dispatch({
            type: StockDetailActionTypes.FETCH_SUCCESS,
            payload: data.bestMatches,
          });
        } catch (error) {
          dispatch({ type: StockDetailActionTypes.FETCH_ERROR, payload: error });
        }
      };
  }, []);

  console.log('state + =', state);
  return <Header title="Stock Detail" />;
};

export default Home;
