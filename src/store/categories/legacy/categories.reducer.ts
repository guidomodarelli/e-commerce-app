import { Reducer } from "redux";
import { CategoryState, INITIAL_STATE } from "../categories.state";
import { CategoryAction } from "./categories.actions";
import { FETCH_CATEGORIES_FAILED, FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS } from "./categories.types";

export const legacy_categoryReducer: Reducer<CategoryState, CategoryAction> = (
  state = INITIAL_STATE,
  action,
): CategoryState => {
  const { type } = action;
  switch (type) {
    case FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATEGORIES_SUCCESS: {
      const { payload } = action;
      return { ...state, isLoading: false, isFetched: true, categories: payload };
    }
    case FETCH_CATEGORIES_FAILED: {
      const { payload } = action;
      return { ...state, isLoading: false, isFetched: true, error: payload };
    }
    default:
      return state;
  }
};
