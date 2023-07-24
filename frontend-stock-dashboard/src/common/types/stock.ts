export interface Stock {
  "1. symbol": string;
  "2. name": string;
  "3. type": string;
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timezone": string;
  "8. currency": string;
  "9. matchScore": string;
}

export interface StockDetail {
    Symbol: string,
    AssetType: string,
    Name: string,
    Description: string,
    CIK: string,
    Exchange: string,
    Currency: string,
    Country: string,
    Sector: string,
    Industry: string,
    Address: string,
    FiscalYearEnd: string,
    LatestQuarter: string,
    MarketCapitalization: string,
    EBITDA: string,
    PERatio: string,
    PEGRatio: string,
    BookValue: string,
    DividendPerShare: string,
    DividendYield: string,
    EPS: string,
    RevenuePerShareTTM: string,
    ProfitMargin: string,
    OperatingMarginTTM: string,
    ReturnOnAssetsTTM: string,
    ReturnOnEquityTTM: string,
    RevenueTTM: string,
    GrossProfitTTM: string,
    DilutedEPSTTM: string,
    QuarterlyEarningsGrowthYOY: string,
    QuarterlyRevenueGrowthYOY: string,
    AnalystTargetPrice: string,
    TrailingPE: string,
    ForwardPE: string,
    PriceToSalesRatioTTM: string,
    PriceToBookRatio: string,
    EVToRevenue: string,
    EVToEBITDA: string,
    Beta: string,
    SharesOutstanding: string,
    DividendDate: string,
    ExDividendDate: string,
}