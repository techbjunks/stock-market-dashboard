import { AutocompleteState } from "../../../../api/types/autocomplete";
import { Stock } from "../../../../common/types/stock";


export type SuggestionPropsType = {
  response: AutocompleteState;
  EmptyComponent?: () => JSX.Element;
  onSuggestionClickCb: (stock: Stock) => void;
};
