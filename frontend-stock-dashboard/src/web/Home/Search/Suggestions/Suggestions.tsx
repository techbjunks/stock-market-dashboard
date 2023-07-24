import { useState } from "react";
import { SuggestionPropsType } from "./types";
import {
  AutocompleteList,
  AutocompleteListItem,
  AutocompleteListItemSkeleton,
} from "./styled";
import { StockType } from "../../../../common/types/stock";

const SuggestionsList = ({
  response,
  EmptyComponent,
  onSuggestionClickCb,
}: SuggestionPropsType): JSX.Element => {

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const suggestions: StockType[] = response?.suggestions;
  const isLoading = response.loading;

  const onStockClick = (stock: StockType) => {
    onSuggestionClickCb?.(stock);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    const { key } = e;
    if (key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prevIndex:number) => (prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0));
    } else if (key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prevIndex:number) => (prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1));
    } else if (key === 'Enter' && selectedIndex !== -1) {
      onStockClick(suggestions[selectedIndex]);
    }
  };

  return (
    <>
      {isLoading ? (
        <AutocompleteList>
          {[...Array(5)].map((_, index) => (
            <AutocompleteListItemSkeleton key={index} />
          ))}
        </AutocompleteList>
      ) : suggestions && suggestions.length ? (
        <AutocompleteList>
          {suggestions.map((stock, index) => {
            return (
              <AutocompleteListItem
                key={stock["1. symbol"]}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onClick={() => onStockClick(stock)}
                style={{
                  backgroundColor: index === selectedIndex ? '#fce5cd' : 'transparent',
                }}
              >
                {stock["2. name"]} ({stock["1. symbol"]})
              </AutocompleteListItem>
            );
          })}
        </AutocompleteList>
      ) : (
        suggestions?.length === 0 && (
          <AutocompleteList>
            <AutocompleteListItem>
              {EmptyComponent ? <EmptyComponent /> : "Stock Not Found! 😿"}
            </AutocompleteListItem>
          </AutocompleteList>
        )
      )}
    </>
  );
};

export default SuggestionsList;
