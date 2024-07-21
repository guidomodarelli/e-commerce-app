import { useContext } from "react";
import { ProductsContext } from "@global/contexts/Categories.context";

function useProducts() {
  return useContext(ProductsContext);
}

export default useProducts;
