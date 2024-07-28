import { Category } from "@core/domain/entities";
import { Dispatch } from "redux";
import { SET_CATEGORIES } from "./categories.types";

export const CategoryAction = (dispatch: Dispatch<CategoryAction>) => {
  return {
    setCategories(categories: Category[]) {
      dispatch({ type: SET_CATEGORIES, payload: categories });
    },
  };
};

export type CategoryAction = Action<typeof SET_CATEGORIES, Category[]>;
