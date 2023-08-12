import {
  StockDetailAction,
  StockDetailActionTypes,
} from "../../reducer/stock-reducers/stock-detail/types";
import cachedApiCall from "../../helpers";
import { getStockDetail } from "../../endpoints";

const queryCacheRecord = await cachedApiCall();

const fetchStockDetail = async (
  symbol: string | undefined,
  dispatch: React.Dispatch<StockDetailAction>,
  cacheTime?: number
) => {
  if (!symbol) {
    return;
  }

  try {
    dispatch({ type: StockDetailActionTypes.FETCH_START });
    // const response = await queryCacheRecord(getStockDetail(symbol), {}, cacheTime);
    const response = await queryCacheRecord(
      "https://run.mocky.io/v3/22c30f53-6537-4e10-86f0-47c3fe26b29c",
      {},
      cacheTime
    );
    dispatch({
      type: StockDetailActionTypes.FETCH_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({ type: StockDetailActionTypes.FETCH_ERROR, payload: error });
  }
};

export default fetchStockDetail;
