import { ProductsContext } from "@/contexts/Products.context";
import { useContext } from "react";

function useProducts() {
  const { products } = useContext(ProductsContext);

  return {
    data: products,
  };
}

export default useProducts;
