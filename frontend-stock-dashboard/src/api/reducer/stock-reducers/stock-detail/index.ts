import {
  StockDetailState,
  StockDetailAction,
  StockDetailActionTypes,
} from "./types";


const stockDetailsReducer = (
  state: StockDetailState,
  action: StockDetailAction
): StockDetailState => {
  switch (action.type) {
    case StockDetailActionTypes.FETCH_START:
      return { ...state, loading: true, error: null };
    case StockDetailActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case StockDetailActionTypes.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default stockDetailsReducer;