import { CategoriesContext } from "@/contexts/Categories.context";
import { useContext } from "react";

function useProducts() {
  return useContext(CategoriesContext);
}

export default useProducts;
