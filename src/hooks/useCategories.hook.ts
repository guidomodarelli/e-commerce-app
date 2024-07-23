import { getCategories } from "@/setup";
import { Category } from "@core/domain/entities";
import { useState } from "react";
import { useEffectOnce } from "react-use";

function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffectOnce(() => {
    getCategories()
      .then(setCategories)
      .catch(() => {});
  });

  return {
    categories,
  };
}

export default useCategories;
