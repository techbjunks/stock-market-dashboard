import { Stock } from "../../common/types/stock";

export interface AutocompleteState {
  loading: boolean;
  error: string | null;
  suggestions: Stock[];
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
      payload: Stock[];
    }
  | {
      type: AutocompleteActionTypes.FETCH_ERROR;
      payload: string | null | unknown;
    };
