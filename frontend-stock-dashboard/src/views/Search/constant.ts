import { AutocompleteState } from "../../api/reducer/stock-reducers/stocks-suggestions/types";

export const isStockValid: number = 2;

export const initialState: AutocompleteState = {
  loading: false,
  suggestions: [],
  error: null,
};
