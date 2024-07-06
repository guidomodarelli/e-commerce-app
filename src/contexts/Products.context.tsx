import { Product } from "@/components/shop/shop.types";
import { PropsWithChildren, createContext, useState } from "react";
import PRODUCTS_DATA from "../shop-data.json";

interface ProductsContextType {
  products: Product[];
}

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
});

interface ProductsProviderProps extends PropsWithChildren {}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DATA);
  const value = { products };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
