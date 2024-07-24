import { PropsWithChildren, createContext, useContext } from "react";
import { getProducts } from "@/setup";
import { Product } from "@core/domain/entities";
import { useQuery } from "@tanstack/react-query";

interface ProductsContextType {
  products: Product[];
}

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
});

export function useProducts() {
  return useContext(ProductsContext);
}

interface ProductsProviderProps extends PropsWithChildren {}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const { data: products = [] } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  const value = { products };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
