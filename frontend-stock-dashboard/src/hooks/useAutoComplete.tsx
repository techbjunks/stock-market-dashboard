import { useEffect, useReducer } from "react";
import {
  AutocompleteState,
  autocompleteReducer,
  AutocompleteActionTypes,
} from "../api/reducer/autocomplete";

const useAutocomplete = (apiEndpoint: string, searchQuery: string): AutocompleteState => {
  const initialState: AutocompleteState = {
    loading: false,
    suggestions: [],
    error: null,
  };

  const [state, dispatch] = useReducer(autocompleteReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchSuggestions = async (inputValue: string) => {
      try {
        dispatch({ type: AutocompleteActionTypes.FETCH_START });
        const response = await fetch(`${apiEndpoint}?query=${inputValue}`, {
          signal,
        });
        const data = await response.json();
        dispatch({ type: AutocompleteActionTypes.FETCH_SUCCESS, payload: data });
      } catch (error) {
        if (!signal.aborted) {
          dispatch({ type: AutocompleteActionTypes.FETCH_ERROR, payload: error });
        }
      }
    };

    fetchSuggestions(searchQuery);
    return () => {
      controller.abort();
    };
  }, [apiEndpoint, searchQuery]);

  return state;
};

export default useAutocomplete;
