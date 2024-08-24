import { Category } from "@core/category/Domain";
import { fetchCategoriesStart, selectCategories, selectCategoriesList, selectCategoriesMap } from "@store/categories";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useEffectOnce } from "react-use";

interface CategoriesOutput {
  categories: Category[];
  categoriesMap: ReturnType<typeof selectCategoriesMap>;
  hasBeenFetched: boolean;
  isLoading: boolean;
  categoryExists: (title: string) => boolean;
}

function useCategories(): CategoriesOutput {
  const dispatch = useAppDispatch();
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const categoriesList = useAppSelector(selectCategoriesList);
  const { isFetched, isLoading } = useAppSelector(selectCategories);

  useEffectOnce(() => {
    if (categoriesList.length === 0) {
      dispatch(fetchCategoriesStart());
    }
  });

  const categoryExists = (title = "") => {
    return categoriesList.some((category) => category.title.toLowerCase() === title?.toLowerCase());
  };

  return {
    categories: categoriesList,
    categoriesMap,
    hasBeenFetched: isFetched,
    isLoading,
    categoryExists,
  };
}

export default useCategories;
