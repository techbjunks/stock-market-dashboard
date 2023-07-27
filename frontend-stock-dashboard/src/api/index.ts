import {
  AutocompleteAction,
  AutocompleteActionTypes,
} from "./types/autocomplete";
import {
  StockDetailAction,
  StockDetailActionTypes,
} from "./types/stockdetails";
import cachedApiCall from "./helpers";
import { getStockResults, getStockDetail } from "./endpoints";

const queryCacheRecord = await cachedApiCall();

export const fetchSuggestions = async (
  query: string,
  dispatch: React.Dispatch<AutocompleteAction>
) => {
  try {
    dispatch({ type: AutocompleteActionTypes.FETCH_START });
    // const response = await fetch(getStockResults(query));
    const response = await fetch(
      "https://run.mocky.io/v3/04619120-b4c2-4b5f-8f49-8f5b7fe81146"
    );
    const data = await response.json();
    dispatch({
      type: AutocompleteActionTypes.FETCH_SUCCESS,
      payload: data.bestMatches,
    });
  } catch (error) {
    dispatch({ type: AutocompleteActionTypes.FETCH_ERROR, payload: error });
  }
};

export const fetchStockDetail = async (
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
