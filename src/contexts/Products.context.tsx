import { PropsWithChildren, createContext, useContext, useState } from "react";
import { getProductsGroupByCategories } from "@/setup";
import { useEffectOnce } from "react-use";
import { Category } from "@core/domain/entities";

interface ProductsContextType {
  products: Category[];
}

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
});

export function useProducts() {
  return useContext(ProductsContext);
}

interface ProductsProviderProps extends PropsWithChildren {}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Category[]>([]);

  useEffectOnce(() => {
    getProducts()
      .then(setProducts)
      .catch(() => {});
  });

  const value = { products };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
