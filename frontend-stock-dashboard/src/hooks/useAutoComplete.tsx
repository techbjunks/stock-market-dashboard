import { useEffect, useReducer } from "react";
import {
  AutocompleteState,
  autocompleteReducer,
  AutocompleteActionTypes,
} from "../api/reducer/autocomplete";

const useAutocomplete = (endpoint:string): AutocompleteState => {
  const initialState: AutocompleteState = {
    loading: false,
    suggestions: [],
    error: null,
  };

  const [state, dispatch] = useReducer(autocompleteReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchSuggestions = async () => {
      try {
        dispatch({ type: AutocompleteActionTypes.FETCH_START });
        const response = await fetch(endpoint, {
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

    fetchSuggestions();
    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return state;
};

export default useAutocomplete;
