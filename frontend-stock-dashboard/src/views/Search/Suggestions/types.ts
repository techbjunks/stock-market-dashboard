import { AutocompleteState } from "../../../api/types/getStock";
import { StockType } from "../../../common/types/stock";


export type SuggestionPropsType = {
  response: AutocompleteState;
  EmptyComponent?: () => JSX.Element;
  onSuggestionClickCb: (stock: StockType) => void;
};
