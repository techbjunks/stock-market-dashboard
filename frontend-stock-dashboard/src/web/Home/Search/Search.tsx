import { useState, useReducer, useEffect } from "react";
import { Container, InputStyle } from "./styled";
import { useDebounce } from "../../../hooks";
import {
  AutocompleteState,
  autocompleteReducer,
  AutocompleteActionTypes,
} from "../../../api/reducer/autocomplete";
import { getStockResults } from "../../../utils";
import Button from "../../../common/components/Button/Button";
import TextInput from "../../../common/components/Input/TextInput/TextInput";

const initialState: AutocompleteState = {
  loading: false,
  suggestions: [],
  error: null,
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const isSearchQueryValid = searchQuery.length > 2;
  const debouncedSearchQuery = useDebounce(searchQuery, 1500);
  const [state, dispatch] = useReducer(autocompleteReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchSuggestions = async() => {
      try {
        dispatch({ type: AutocompleteActionTypes.FETCH_START });
        const response = await fetch(getStockResults(debouncedSearchQuery), {
          signal,
        });
        const data = await response.json();
        dispatch({ type: AutocompleteActionTypes.FETCH_SUCCESS, payload: data });
      } catch (error) {
        if (!signal.aborted) {
          dispatch({ type: AutocompleteActionTypes.FETCH_ERROR, payload: error });
        }
      }
    }
    if (isSearchQueryValid) {
      fetchSuggestions();
    }
    return () => {
      controller.abort();
    };
  }, [debouncedSearchQuery, isSearchQueryValid]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <>
        <TextInput
          autoFocus
          style={InputStyle}
          value={searchQuery}
          onChange={handleChange}
        />
        <Button type="submit" onClick={handleChange}>
          Search
        </Button>
      </>
    </Container>
  );
};

export default Search;
