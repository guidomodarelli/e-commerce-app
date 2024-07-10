import { CategoriesContext } from "@/contexts/Categories.context";
import { useContext } from "react";

function useCategories() {
  const { categories } = useContext(CategoriesContext);

  return {
    categories,
  };
}

export default useCategories;
