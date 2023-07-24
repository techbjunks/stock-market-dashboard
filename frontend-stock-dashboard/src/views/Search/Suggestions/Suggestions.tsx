import { useState, useEffect } from "react";
import { SuggestionPropsType } from "./types";
import {
  AutocompleteList,
  AutocompleteListItem,
  AutocompleteListItemSkeleton,
} from "./styled";
import { Stock } from "../../../common/types/stock";

const SuggestionsList = ({
  response,
  EmptyComponent,
  onSuggestionClickCb,
}: SuggestionPropsType): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const suggestions: Stock[] = response?.suggestions;
  const isLoading = response.loading;
  const onStockClick = (stock: Stock) => {
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

  useEffect(() => {
    if(suggestions && selectedIndex !== -1){
      const selectedItem = document.getElementById(suggestions[selectedIndex]["1. symbol"]);
      if (selectedItem) {
        selectedItem.scrollIntoView({ block: 'nearest' });
      }
    } 
  }, [suggestions, selectedIndex]);

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
                tabIndex={0}
                key={stock["1. symbol"]}
                id={stock["1. symbol"]}
                onKeyDown={handleKeyDown}
                onClick={() => onStockClick(stock)}
                style={{
                  backgroundColor: index === selectedIndex ? '#fce5cd' : 'transparent',
                }}
              >
                {stock["2. name"]} ({stock["1. symbol"]}) , {stock["4. region"]}
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
