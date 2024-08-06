import { getCategories } from "@/setup";
import { Category } from "@core/domain/entities";
import { CategoryAction, selectCategoriesList, selectCategoriesMap } from "@store/categories";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

interface CategoriesOutput {
  categories: Category[];
  categoriesMap: ReturnType<typeof selectCategoriesMap>;
  hasBeenFetched: boolean;
  isLoading: boolean;
  categoryExists: (title: string) => boolean;
}

function useCategories(): CategoriesOutput {
  const dispatch = useDispatch();
  const categoryAction = CategoryAction(dispatch);
  const categoriesMap = useSelector(selectCategoriesMap);
  const categoriesList = useSelector(selectCategoriesList);
  const { isFetched, isLoading } = useQuery({ queryKey: ["categories"], queryFn: queryCategories });

  async function queryCategories() {
    let categories: Category[] = [];
    if (categoriesList.length === 0) {
      categories = await getCategories();
      categoryAction.setCategories(categories);
    }
    return categories;
  }

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
