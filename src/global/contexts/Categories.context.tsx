import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "@/utils/firebase/firebase.utils";
import { Product } from "@global/types/products.types";

interface CategoriesContextType {
  categories: Record<string, Product[]>;
}

export const CategoriesContext = createContext<CategoriesContextType>({
  categories: {},
});

interface CategoriesProviderProps extends PropsWithChildren {}

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [categories, setCategories] = useState<Record<string, Product[]>>({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    };

    void getCategoriesMap();
  });

  const value = { categories };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
