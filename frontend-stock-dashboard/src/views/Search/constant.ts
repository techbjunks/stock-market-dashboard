import { AutocompleteState } from "../../api/types/autocomplete";

export const isStockValid: number = 2;

export const initialState: AutocompleteState = {
  loading: false,
  suggestions: [],
  error: null,
};
