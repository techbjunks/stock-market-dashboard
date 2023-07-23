import React from "react";
import { SuggestionProps } from "./types";
import { AutocompleteList, AutocompleteListItem } from "./styled";

const SuggestionsList = ({
  response,
  EmptyComponent,
  onSuggestionClickCb,
}: SuggestionProps): JSX.Element => {
  const suggestions = response.suggestions;

  const onStockClick = (stock: string) => {
    onSuggestionClickCb?.(stock);
  };
  
  return (
    <>
      {suggestions.length ? (
        <AutocompleteList>
          {suggestions.map((symbol) => (
            <AutocompleteListItem key={symbol.name} onClick={() => onStockClick(symbol.name)}>
              {symbol.name}
            </AutocompleteListItem>
          ))}
        </AutocompleteList>
      ) : React.isValidElement(EmptyComponent) ? (
        <EmptyComponent />
      ) : (
        <div>Stock Not Found!</div>
      )}
    </>
  );
};

export default SuggestionsList;
