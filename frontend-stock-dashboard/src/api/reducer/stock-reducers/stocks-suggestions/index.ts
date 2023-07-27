import {AutocompleteState, AutocompleteAction, AutocompleteActionTypes} from './types';

export const autocompleteReducer = (
  state: AutocompleteState,
  action: AutocompleteAction
): AutocompleteState => {
  switch (action.type) {
    case AutocompleteActionTypes.FETCH_START:
      return { ...state, loading: true, error: null };
    case AutocompleteActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        suggestions: action.payload,
        error: null,
      };
    case AutocompleteActionTypes.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
