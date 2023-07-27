import {
  ChartDetailState,
  FetchChartActionTypes,
  FetchChartAction,
} from "./types";

const fetchChartReducer = (
  state: ChartDetailState,
  action: FetchChartAction
): ChartDetailState => {
  switch (action.type) {
    case FetchChartActionTypes.FETCH_START:
      return { loading: true, error: null, data: {} };
    case FetchChartActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FetchChartActionTypes.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload, data: {} };
    default:
      return state;
  }
};

export default fetchChartReducer;