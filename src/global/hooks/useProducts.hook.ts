import { useContext } from "react";
import { CategoriesContext } from "@global/contexts/Categories.context";

function useProducts() {
  return useContext(CategoriesContext);
}

export default useProducts;
