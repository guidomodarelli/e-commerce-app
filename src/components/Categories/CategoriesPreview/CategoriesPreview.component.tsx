import { useProducts } from "@/hooks/useProducts.hook";
import CategoryPreview from "./CategoryPreview/CategoryPreview.component";
import useCategories from "@/hooks/useCategories.hook";

interface CategoriesPreviewProps {}

function CategoriesPreview({}: CategoriesPreviewProps) {
  useProducts();
  const { categoriesMap } = useCategories();

  return (
    <>
      {Object.entries(categoriesMap).map(([categoryTitle, products]) => (
        <CategoryPreview key={categoryTitle} title={categoryTitle} products={products} />
      ))}
    </>
  );
}

export default CategoriesPreview;
