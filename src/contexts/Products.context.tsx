import { getProducts } from "@/setup";
import { ProductAction, useProductSelector } from "@store/products";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export function useProducts() {
  const dispatch = useDispatch();
  const productAction = ProductAction(dispatch);
  const { list } = useProductSelector();

  useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await getProducts();
      productAction.setProducts(products);
      return products;
    },
  });

  return {
    products: list,
  };
}
