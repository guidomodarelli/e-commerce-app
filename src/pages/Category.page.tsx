import { useProducts } from "@/hooks/useProducts.hook";
import useCategories from "@/hooks/useCategories.hook";
import CategoryPreview from "@components/Categories/CategoriesPreview/CategoryPreview/CategoryPreview.component";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Category() {
  const { categoriesMap, hasBeenFetched, categoryExists } = useCategories();
  useProducts();
  const { categoryTitle = "" } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (hasBeenFetched && !categoryExists(categoryTitle)) {
      navigate("/404");
    }
  }, [hasBeenFetched, navigate, categoryTitle, categoryExists]);

  return <CategoryPreview center title={categoryTitle} products={categoriesMap[categoryTitle]} />;
}

export default Category;
