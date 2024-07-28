import { Reducer } from "redux";
import { CategoryState, INITIAL_STATE } from "./categories.state";
import { CategoryAction } from "./categories.actions";
import { SET_CATEGORIES } from "./categories.types";

export const categoryReducer: Reducer<CategoryState, CategoryAction> = (
  state = INITIAL_STATE,
  action,
): CategoryState => {
  const { type, payload } = action;
  switch (type) {
    case SET_CATEGORIES:
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
};
