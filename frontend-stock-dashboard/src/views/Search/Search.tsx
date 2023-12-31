import { useNavigate } from "react-router-dom";
import { useState, useReducer, useEffect, useRef, useTransition } from "react";

import { useDebounce } from "../../hooks";
import { fetchSuggestions } from "../../api";
import { EmptyComponentProps } from "./types";
import { Stock } from "../../common/types/stock";
import SuggestionList from "./components/Suggestions";
import { isStockValid, initialState } from "./constant";
import useClickOutside from "../../hooks/useClickOutside";
import Button from "../../common/components/Button/Button";
import FlexContainer from "../../common/components/Box/Flex";
import { Container, InputStyle, InputWrapper } from "./styled";
import TextInput from "../../common/components/Input/TextInput/TextInput";
import { autocompleteReducer } from "../../api/reducer/stock-reducers/stocks-suggestions";

const EmptyComponent = ({ query }: EmptyComponentProps): React.ReactNode => {
  return <div>{query.toUpperCase()} Stock Not Found! 😿</div>;
};

const Search = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const debouncedSearchQuery = useDebounce(fetchSuggestions, 1500);
  const [isAutocompleteOpen, setAutocompleteOpen] = useState(false);
  const [state, dispatch] = useReducer(autocompleteReducer, initialState);

  const isSearchQueryValid = searchQuery.length > isStockValid;
  const isSuggestionVisible =
    isAutocompleteOpen && searchQuery.length > isStockValid && !isPending;

  useEffect(() => {
    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, []);

  const valiateAndQueryResults = () => {
    if (isSearchQueryValid) {
      setAutocompleteOpen(true);
      debouncedSearchQuery(searchQuery, dispatch);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
    startTransition(() => {
      valiateAndQueryResults();
    });
  };

  const onSubmit = () => {
    if (isSearchQueryValid) {
      setAutocompleteOpen(true);
      fetchSuggestions(searchQuery, dispatch);
    }
  };

  const handleOutsideClick = () => {
    setAutocompleteOpen(false);
  };

  const handleSelectedItem = (stock: Stock) => {
    const stockName = stock["2. name"];
    setSearchQuery(stockName);
    const stockSymbol = stock["1. symbol"];
    navigate(`/stock/${stockSymbol}/details`);
    setAutocompleteOpen(false);
  };

  useClickOutside(ref, handleOutsideClick);

  return (
    <Container ref={ref}>
      <FlexContainer alignItems="center">
        <TextInput
          autoFocus
          name="search-bar"
          style={InputStyle}
          value={searchQuery}
          onSubmit={onSubmit}
          onChange={handleChange}
          containerStyle={InputWrapper}
          placeholder="Please enter your stock symbol"
        />
        <Button type="submit" onClick={onSubmit}>
          Search
        </Button>
      </FlexContainer>

      {isSuggestionVisible && (
        <SuggestionList
          response={state}
          onSuggestionClickCb={handleSelectedItem}
          EmptyComponent={<EmptyComponent query={searchQuery} />}
        />
      )}
    </Container>
  );
};

export default Search;
