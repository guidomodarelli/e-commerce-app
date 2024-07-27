import { useProducts } from "@/hooks/useProducts.hook";
import CategoryPreview from "./CategoryPreview/CategoryPreview.component";
import useCategories from "@/hooks/useCategories.hook";

interface CategoriesPreviewProps {}

function CategoriesPreview({}: CategoriesPreviewProps) {
  const { products } = useProducts();
  const { categories } = useCategories();

  return (
    <>
      {categories.map(({ id: categoryId, title }) => {
        const productsFiltered = products.filter((product) => product.categoryId === categoryId);
        return <CategoryPreview key={title} title={title} products={productsFiltered} />;
      })}
    </>
  );
}

export default CategoriesPreview;
