import { AutocompleteState } from "../../../../api/types/getStock";

export type SuggestionProps = {
  response: AutocompleteState;
  EmptyComponent?: () => JSX.Element;
  onSuggestionClickCb: (item: string) => void;
};
