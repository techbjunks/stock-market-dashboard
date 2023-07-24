import { SuggestionProps } from "./types";
import {
  AutocompleteList,
  AutocompleteListItem,
  AutocompleteListItemSkeleton,
} from "./styled";

const SuggestionsList = ({
  response,
  EmptyComponent,
  onSuggestionClickCb,
}: SuggestionProps): JSX.Element => {
  const suggestions = response.suggestions;
  const isLoading = response.loading;

  const onStockClick = (stock: string) => {
    onSuggestionClickCb?.(stock);
  };

  return (
    <>
      {isLoading ? (
        <AutocompleteList>
          {[...Array(5)].map((_, index) => (
            <AutocompleteListItemSkeleton key={index} />
          ))}
        </AutocompleteList>
      ) : suggestions.length ? (
        <AutocompleteList>
          {suggestions.map((symbol) => (
            <AutocompleteListItem
              key={symbol.name}
              onClick={() => onStockClick(symbol.name)}
            >
              {symbol.name}
            </AutocompleteListItem>
          ))}
        </AutocompleteList>
      ) : (
        <AutocompleteList>
         <AutocompleteListItem>{EmptyComponent ? <EmptyComponent /> : 'Stock Not Found! 😿'}</AutocompleteListItem>
        </AutocompleteList>
      )}
    </>
  );
};

export default SuggestionsList;
