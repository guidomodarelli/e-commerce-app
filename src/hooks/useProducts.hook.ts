import { getProducts } from "@/setup";
import { Product } from "@core/product/Domain";
import { selectProducts, setProducts } from "@store/products";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const dispatch = useAppDispatch();
  // const productAction = ProductAction(dispatch);
  const { list } = useAppSelector(selectProducts);
  const { isLoading } = useQuery({ queryKey: ["products"], queryFn: queryProducts });

  async function queryProducts() {
    let products: Product[] = [];
    if (list.length === 0) {
      products = await getProducts();
      // productAction.setProducts(products);
      dispatch(setProducts(products));
    }
    return products;
  }

  return {
    products: list,
    isLoading,
  };
}
