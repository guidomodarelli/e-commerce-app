import { getProducts } from "@/setup";
import { Product } from "@core/domain/entities";
import { ProductAction, selectProducts } from "@store/products";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

export function useProducts() {
  const dispatch = useDispatch();
  const productAction = ProductAction(dispatch);
  const { list } = useSelector(selectProducts);
  const { isLoading } = useQuery({ queryKey: ["products"], queryFn: queryProducts });

  async function queryProducts() {
    let products: Product[] = [];
    if (list.length === 0) {
      products = await getProducts();
      productAction.setProducts(products);
    }
    return products;
  }

  return {
    products: list,
    isLoading,
  };
}
