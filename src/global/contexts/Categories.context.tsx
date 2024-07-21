import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "@/utils/firebase/firebase.utils";
import { Product } from "@/core/domain/entities/Product";

interface ProductsContextType {
  products: Record<string, Product[]>;
}

export const ProductsContext = createContext<ProductsContextType>({
  products: {},
});

interface ProductsProviderProps extends PropsWithChildren {}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Record<string, Product[]>>({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const mapped = await getCategoriesAndDocuments();
      setProducts(mapped);
    };

    void getCategoriesMap();
  });

  const value = { products };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
