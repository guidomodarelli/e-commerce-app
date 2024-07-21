import { useContext } from "react";
import { ProductsContext } from "@global/contexts/Products.context";

function useProducts() {
  return useContext(ProductsContext);
}

export default useProducts;
