import { StockDetail } from "../../common/types/stock";

export interface StockDetailState {
  loading: boolean;
  data: StockDetail;
  error: string | null | unknown;
}

export enum StockDetailActionTypes {
  FETCH_START = "FETCH_START",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
}

export type StockDetailAction =
  | { type: StockDetailActionTypes.FETCH_START }
  | {
      type: StockDetailActionTypes.FETCH_SUCCESS;
      payload: StockDetail;
    }
  | {
      type: StockDetailActionTypes.FETCH_ERROR;
      payload: string | null | unknown;
    };
