import {
  AutocompleteAction,
  AutocompleteActionTypes,
} from "./types/autocomplete";
import {
  StockDetailAction,
  StockDetailActionTypes,
} from "./types/stockdetails";
import { getStockResults, getStockDetail } from "./endpoints";

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

export const fetchStockDetail = async (query: string, dispatch: React.Dispatch<StockDetailAction>) => {
  try {
    dispatch({ type: StockDetailActionTypes.FETCH_START });
    const response = await fetch(getStockDetail(query));
    const data = await response.json();
    dispatch({
      type: StockDetailActionTypes.FETCH_SUCCESS,
      payload: data.bestMatches,
    });
  } catch (error) {
    dispatch({ type: StockDetailActionTypes.FETCH_ERROR, payload: error });
  }
};