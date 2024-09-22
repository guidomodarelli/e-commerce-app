import { Category } from "@core/Contexts/Shop/Category/Domain/Category";
import { FETCH_CATEGORIES_FAILED, FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS } from "./categories.types";
import { createAction } from "@store/utils/reducer.utils";

export const legacy_fetchCategoriesStart = () => createAction(FETCH_CATEGORIES_START);

export const legacy_fetchCategoriesSuccess = (categories: Category[]) =>
  createAction(FETCH_CATEGORIES_SUCCESS, categories);

export const legacy_fetchCategoriesFailure = (error: Error) => createAction(FETCH_CATEGORIES_FAILED, error);

export type CategoryAction =
  | Action<typeof FETCH_CATEGORIES_START>
  | Action<typeof FETCH_CATEGORIES_SUCCESS, Category[]>
  | Action<typeof FETCH_CATEGORIES_FAILED, Error>;
