import { useProducts } from "@/hooks/useProducts.hook";
import useCategories from "@/hooks/useCategories.hook";
import CategoryPreview from "@components/Categories/CategoriesPreview/CategoryPreview/CategoryPreview.component";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "@components/spinner/Spinner.component";

function Category() {
  const { categoriesMap, hasBeenFetched, categoryExists, isLoading: isLoadingCategories } = useCategories();
  const { isLoading: isLoadingProducts } = useProducts();
  const { categoryTitle = "" } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (hasBeenFetched && !categoryExists(categoryTitle)) {
      navigate("/404");
    }
  }, [hasBeenFetched, navigate, categoryTitle, categoryExists]);

  const isLoading = isLoadingProducts || isLoadingCategories;

  if (isLoading) {
    return <Spinner />;
  }

  return <CategoryPreview center title={categoryTitle} products={categoriesMap[categoryTitle]} />;
}

export default Category;
