import cachedApiCall from "../../helpers";
import {
    FetchChartActionTypes,
    FetchChartAction,
  } from "../../reducer/stock-reducers/stock-chart/types";
import { getStockChartDetail } from "../../endpoints";
  
  const queryCacheRecord = await cachedApiCall();
  
  const fetchStockChart = async (
    symbol: string | undefined,
    dispatch: React.Dispatch<FetchChartAction>,
    cacheTime?: number
  ) => {
    if (!symbol) {
      return;
    }
  
    try {
      dispatch({ type: FetchChartActionTypes.FETCH_START });
      // const response = await queryCacheRecord(getStockChartDetail(symbol), {}, cacheTime);
      const response = await queryCacheRecord(
        "https://run.mocky.io/v3/103b3b9d-87af-4aaa-b750-f971f911ed4a",
        {},
        cacheTime
      );
      dispatch({
        type: FetchChartActionTypes.FETCH_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({ type: FetchChartActionTypes.FETCH_ERROR, payload: error });
    }
  };
  
  export default fetchStockChart;
  