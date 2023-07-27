import { StockDetailState } from "../../api/reducer/stock-reducers/stock-detail/types";

export const initialStockData = {
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

export const initialState: StockDetailState = {
  loading: false,
  data: initialStockData,
  error: false,
};
