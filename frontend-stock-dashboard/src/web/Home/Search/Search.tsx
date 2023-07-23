import { useState, useReducer, useEffect } from "react";
import SuggestionList from './Suggestions';
import { useDebounce } from "../../../hooks";
import { getStockResults } from "../../../utils";
import Button from "../../../common/components/Button/Button";
import { Container, InputStyle, InputWrapper } from "./styled";
import { autocompleteReducer } from "../../../api/reducer/autocomplete";
import { FlexContainer } from "../../../common/components/Box/Flex/styled";
import TextInput from "../../../common/components/Input/TextInput/TextInput";
import {AutocompleteState, AutocompleteActionTypes} from '../../../api/types/getStock';

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

  const fetchSuggestions = async (query: unknown) => {
    try {
      dispatch({ type: AutocompleteActionTypes.FETCH_START });
      const response = await fetch(getStockResults(query));
      const data = await response.json();
      dispatch({ type: AutocompleteActionTypes.FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: AutocompleteActionTypes.FETCH_ERROR, payload: error });
    }
  };

  useEffect(() => {
    if (isSearchQueryValid) {
      fetchSuggestions(debouncedSearchQuery);
    }

    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, [debouncedSearchQuery, isSearchQueryValid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = () => {
    if (isSearchQueryValid) {
      fetchSuggestions(debouncedSearchQuery);
    }
  };

  const handleSelectedItem = () => {
    
  }

  return (
    <Container>
      <FlexContainer alignItems="center">
        <TextInput
          autoFocus
          style={InputStyle}
          value={searchQuery}
          onSubmit={onSubmit}
          onChange={handleChange}
          containerStyle={InputWrapper}
        />
        <Button type="submit" onClick={onSubmit}>
          Search
        </Button>
      </FlexContainer>
      <SuggestionList response={state} onSuggestionClickCb={handleSelectedItem} />
    </Container>
  );
};

export default Search;
