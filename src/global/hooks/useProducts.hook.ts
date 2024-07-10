import { CategoriesContext } from "@/contexts/Categories.context";
import { useContext } from "react";

function useProducts() {
  const { categories } = useContext(CategoriesContext);

  return {
    categories,
  };
}

export default useProducts;
