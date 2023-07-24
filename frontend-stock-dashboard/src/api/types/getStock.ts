import { StockType } from "../../common/types/stock";
export interface AutocompleteSuggestion {
    id: number;
    name: string;
  }
  
  export interface AutocompleteState {
    loading: boolean;
    error: string | null;
    suggestions: StockType[];
  }
  
  export enum AutocompleteActionTypes {
    FETCH_START = "FETCH_START",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR",
  }
  
  export type AutocompleteAction =
    | { type: AutocompleteActionTypes.FETCH_START }
    | {
        type: AutocompleteActionTypes.FETCH_SUCCESS;
        payload: StockType[];
      }
    | { type: AutocompleteActionTypes.FETCH_ERROR; payload: string | null | unknown };