import { Category } from "@core/domain/entities";
import { FETCH_CATEGORIES_FAILED, FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS } from "./categories.types";
import { createAction } from "@store/utils/reducer.utils";

export const fetchCategoriesStart = () => createAction(FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories: Category[]) => createAction(FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailure = (error: Error) => createAction(FETCH_CATEGORIES_FAILED, error);

export type CategoryAction =
  | Action<typeof FETCH_CATEGORIES_START>
  | Action<typeof FETCH_CATEGORIES_SUCCESS, Category[]>
  | Action<typeof FETCH_CATEGORIES_FAILED, Error>;
