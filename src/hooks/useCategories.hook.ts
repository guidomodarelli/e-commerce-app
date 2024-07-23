import { getCategories } from "@/setup";
import { Category } from "@core/domain/entities";
import { useState } from "react";
import { useEffectOnce } from "react-use";

function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffectOnce(() => {
    getCategories()
      .then((categories_) => {
        setCategories(categories_);
      })
      .catch(() => {});
  });

  return {
    categories,
  };
}

export default useCategories;
