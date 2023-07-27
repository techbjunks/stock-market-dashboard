export interface ChartDetailState {
  loading: boolean;
  data: unknown;
  error: string | null | unknown;
}

export enum FetchChartActionTypes {
  FETCH_START = "FETCH_START",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
}

export type FetchChartAction =
  | { type: FetchChartActionTypes.FETCH_START }
  | {
      type: FetchChartActionTypes.FETCH_SUCCESS;
      payload: ChartDetailState;
    }
  | {
      type: FetchChartActionTypes.FETCH_ERROR;
      payload: string | null | unknown;
    };
