import { getCategories } from "@/setup";
import { Category } from "@core/domain/entities";
import { useState } from "react";
import { useEffectOnce } from "react-use";

interface CategoriesOutput {
  categories: Category[];
  hasBeenFetched: boolean;
  getCategoryId: (categoryTitle?: Category["title"]) => Category["id"] | undefined;
}

function useCategories(): CategoriesOutput {
  const [categories, setCategories] = useState<Category[]>([]);
  const [fetched, setFetched] = useState(false);

  useEffectOnce(() => {
    getCategories()
      .then(setCategories)
      .then(() => {
        setFetched(true);
      })
      .catch(() => {});
  });

  const getCategoryId = (categoryTitle?: Category["title"]) => {
    return categories.find((category) => category.title === categoryTitle)?.id;
  };

  return {
    categories,
    hasBeenFetched: fetched,
    getCategoryId,
  };
}

export default useCategories;
