import { useProducts } from "@/contexts/Products.context";
import useCategories from "@/hooks/useCategories.hook";
import ProductCard from "@components/product-card/ProductCard.component";
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

  return (
    <div>
      {productsFiltered.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
}

export default Category;
