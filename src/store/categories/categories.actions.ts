import { Category } from "@core/domain/entities";
import { FETCH_CATEGORIES_FAILED, FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS } from "./categories.types";
import { getCategories } from "@/setup";
import { AppDispatch } from "@store/store";

export const CategoryAction = (dispatch: AppDispatch) => {
  const fetchCategoriesStart = () => dispatch({ type: FETCH_CATEGORIES_START });

  const fetchCategoriesSuccess = (categories: Category[]) =>
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories });

  const fetchCategoriesFailure = (error: Error) => dispatch({ type: FETCH_CATEGORIES_FAILED, payload: error });

  return {
    fetchCategoriesStart,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    fetchCategories: async () => {
      fetchCategoriesStart();
      try {
        const categories = await getCategories();
        fetchCategoriesSuccess(categories);
      } catch (error) {
        fetchCategoriesFailure(error as Error);
      }
    },
  };
};

export type CategoryAction =
  | Action<typeof FETCH_CATEGORIES_START>
  | Action<typeof FETCH_CATEGORIES_SUCCESS, Category[]>
  | Action<typeof FETCH_CATEGORIES_FAILED, Error>;
