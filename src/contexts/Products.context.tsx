import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Product } from "@/core/domain/entities/Product";
import { getProductsGroupByCategories } from "@/setup";
import { useEffectOnce } from "react-use";

interface ProductsContextType {
  products: Record<string, Product[]>;
}

export const ProductsContext = createContext<ProductsContextType>({
  products: {},
});

export function useProducts() {
  return useContext(ProductsContext);
}

interface ProductsProviderProps extends PropsWithChildren {}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Record<string, Product[]>>({});

  const getCategoriesMap = async () => {
    const mapped = await getProductsGroupByCategories();
    setProducts(mapped);
  };

  useEffectOnce(() => {
    void getCategoriesMap();
  });

  const value = { products };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
