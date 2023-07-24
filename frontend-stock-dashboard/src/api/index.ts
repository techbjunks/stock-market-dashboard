import {
  AutocompleteAction,
  AutocompleteActionTypes,
} from "./types/autocomplete";
import { getStockResults } from "../utils/api";

export const fetchSuggestions = async (
  query: string,
  dispatch: React.Dispatch<AutocompleteAction>
) => {
  try {
    dispatch({ type: AutocompleteActionTypes.FETCH_START });
    const response = await fetch(getStockResults(query));
    // const response = await fetch(
    //   "https://run.mocky.io/v3/04619120-b4c2-4b5f-8f49-8f5b7fe81146"
    // ); // remove this hard code before demo
    const data = await response.json();
    dispatch({
      type: AutocompleteActionTypes.FETCH_SUCCESS,
      payload: data.bestMatches,
    });
  } catch (error) {
    dispatch({ type: AutocompleteActionTypes.FETCH_ERROR, payload: error });
  }
};
