import { getCategories } from "@/setup";
import { Category } from "@core/domain/entities";
import { useQuery } from "@tanstack/react-query";

interface CategoriesOutput {
  categories: Category[];
  hasBeenFetched: boolean;
  getCategoryId: (categoryTitle?: Category["title"]) => Category["id"] | undefined;
}

function useCategories(): CategoriesOutput {
  const { isFetched, data: categories = [] } = useQuery({ queryKey: ["categories"], queryFn: getCategories });

  const getCategoryId = (categoryTitle?: Category["title"]) => {
    return categories?.find((category) => category.title === categoryTitle)?.id;
  };

  return {
    categories,
    hasBeenFetched: isFetched,
    getCategoryId,
  };
}

export default useCategories;
