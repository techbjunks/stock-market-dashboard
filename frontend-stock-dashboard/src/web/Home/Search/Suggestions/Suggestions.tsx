import { StockType } from "../../../../common/types/stock";
import { SuggestionPropsType } from "./types";
import {
  AutocompleteList,
  AutocompleteListItem,
  AutocompleteListItemSkeleton,
} from "./styled";

const SuggestionsList = ({
  response,
  EmptyComponent,
  onSuggestionClickCb,
}: SuggestionPropsType): JSX.Element => {
  const suggestions: StockType[] = response?.suggestions;
  const isLoading = response.loading;

  const onStockClick = (stock: StockType) => {
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
      ) : suggestions && suggestions.length ? (
        <AutocompleteList>
          {suggestions.map((stock) => {
            return (
              <AutocompleteListItem
                key={stock["2. name"]}
                onClick={() => onStockClick(stock)}
              >
                {stock["2. name"]} ({stock["1. symbol"]})
              </AutocompleteListItem>
            );
          })}
        </AutocompleteList>
      ) : (
        suggestions.length === 0 && (
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
