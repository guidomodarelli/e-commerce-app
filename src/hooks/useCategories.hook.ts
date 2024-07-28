import { getCategories } from "@/setup";
import { Category } from "@core/domain/entities";
import { CategoryAction, useCategorySelector } from "@store/categories";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

interface CategoriesOutput {
  categories: Category[];
  hasBeenFetched: boolean;
  getCategoryId: (categoryTitle?: Category["title"]) => Category["id"] | undefined;
}

function useCategories(): CategoriesOutput {
  const dispatch = useDispatch();
  const categoryAction = CategoryAction(dispatch);
  const { list } = useCategorySelector();
  const { isFetched } = useQuery({ queryKey: ["categories"], queryFn: queryCategories });

  async function queryCategories() {
    let categories: Category[] = [];
    if (list.length === 0) {
      categories = await getCategories();
      categoryAction.setCategories(categories);
    }
    return categories;
  }

  const getCategoryId = (categoryTitle?: Category["title"]) => {
    return list?.find((category) => category.title === categoryTitle)?.id;
  };

  return {
    categories: list,
    hasBeenFetched: isFetched,
    getCategoryId,
  };
}

export default useCategories;
