import { getStockResults } from "../../endpoints";
import {
  AutocompleteAction,
  AutocompleteActionTypes,
} from "../../reducer/stock-reducers/stocks-suggestions/types";

const fetchSuggestions = async (
  query: string,
  dispatch: React.Dispatch<AutocompleteAction>,
  signal?: AbortSignal | null | undefined,
) => {
  const sanitizedQuery = query.split(" ").join("");
  try {
    dispatch({ type: AutocompleteActionTypes.FETCH_START });
    // const response = await fetch(getStockResults(sanitizedQuery), {signal});
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

export default fetchSuggestions;
