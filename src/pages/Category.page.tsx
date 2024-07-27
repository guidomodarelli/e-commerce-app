import { useProducts } from "@/hooks/useProducts.hook";
import useCategories from "@/hooks/useCategories.hook";
import CategoryPreview from "@components/Categories/CategoriesPreview/CategoryPreview/CategoryPreview.component";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Category() {
  const { categories, getCategoryId, hasBeenFetched } = useCategories();
  const { products } = useProducts();
  const { categoryTitle } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      hasBeenFetched &&
      !categories.some((category) => category.title.toLowerCase() === categoryTitle?.toLowerCase())
    ) {
      navigate("/404");
    }
  }, [hasBeenFetched, navigate, categoryTitle, categories]);

  const productsFiltered = products.filter((product) => getCategoryId(categoryTitle) === product.categoryId);

  return <CategoryPreview center title={categoryTitle ?? ""} products={productsFiltered} />;
}

export default Category;
