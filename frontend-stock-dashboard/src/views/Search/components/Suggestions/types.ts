import { AutocompleteState } from "../../../../api/reducer/stock-reducers/stocks-suggestions/types";
import { Stock } from "../../../../common/types/stock";


export type SuggestionPropsType = {
  response: AutocompleteState;
  EmptyComponent?: React.ReactNode;
  onSuggestionClickCb: (stock: Stock) => void;
};
