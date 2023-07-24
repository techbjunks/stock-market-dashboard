import { useState, useReducer, useEffect, useRef, useTransition } from "react";
import { useNavigate } from 'react-router-dom';

import { isStockValid } from "./constant";
import SuggestionList from "./Suggestions";
import { useDebounce } from "../../hooks";
import { getStockResults } from "../../utils";
import { StockType } from "../../common/types/stock";
import ErrorBoundary from "../../common/ui/ErrorBoundary";
import useClickOutside from "../../hooks/useClickOutside";
import Button from "../../common/components/Button/Button";
import { Container, InputStyle, InputWrapper } from "./styled";
import { autocompleteReducer } from "../../api/reducer/autocomplete";
import { FlexContainer } from "../../common/components/Box/Flex/styled";
import TextInput from "../../common/components/Input/TextInput/TextInput";
import {
  AutocompleteState,
  AutocompleteActionTypes,
} from "../../api/types/getStock";

const initialState: AutocompleteState = {
  loading: false,
  suggestions: [],
  error: null,
};

const Search = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const debouncedSearchQuery: string = useDebounce(searchQuery, 1500);
  const [isAutocompleteOpen, setAutocompleteOpen] = useState(false);
  const [state, dispatch] = useReducer(autocompleteReducer, initialState);

  const isSearchQueryValid = searchQuery.length > isStockValid;
  const isSuggestionVisible =
    isAutocompleteOpen && searchQuery.length > isStockValid;

  const fetchSuggestions = async (query: string) => {
    setAutocompleteOpen(true);
    try {
      dispatch({ type: AutocompleteActionTypes.FETCH_START });
      // const response = await fetch(getStockResults(query));
      const response = await fetch(
        "https://run.mocky.io/v3/04619120-b4c2-4b5f-8f49-8f5b7fe81146"
      ); // remove this hard code before demo
      const data = await response.json();
      dispatch({
        type: AutocompleteActionTypes.FETCH_SUCCESS,
        payload: data.bestMatches,
      });
    } catch (error) {
      dispatch({ type: AutocompleteActionTypes.FETCH_ERROR, payload: error });
    }
  };

  useEffect(() => {
    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
    startTransition(() => {
      if (isSearchQueryValid) {
        fetchSuggestions(debouncedSearchQuery);
      }
    });
  };

  const onSubmit = () => {
    if (isSearchQueryValid) {
      fetchSuggestions(debouncedSearchQuery);
    }
  };

  const handleOutsideClick = () => {
    setAutocompleteOpen(false);
  };

  const handleSelectedItem = (stock: StockType) => {
    const stockName = stock['2. name'];
    setSearchQuery(stockName);
    const stockSymbol = stock['1. symbol'];
    navigate(`/stock/${stockSymbol}/details`);
    setAutocompleteOpen(false);
  };

  useClickOutside(ref, handleOutsideClick);

  return (
    <ErrorBoundary>
      <Container ref={ref}>
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

        {!isPending && isSuggestionVisible && (
          <SuggestionList
            response={state}
            onSuggestionClickCb={handleSelectedItem}
            EmptyComponent={() => (
              <div>{searchQuery.toUpperCase()} Stock Not Found! 😿</div>
            )}
          />
        )}
      </Container>
    </ErrorBoundary>
  );
};

export default Search;
