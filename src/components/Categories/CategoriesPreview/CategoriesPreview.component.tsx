import { useProducts } from "@/hooks/useProducts.hook";
import CategoryPreview from "./CategoryPreview/CategoryPreview.component";
import useCategories from "@/hooks/useCategories.hook";
import Spinner from "@components/spinner/Spinner.component";

interface CategoriesPreviewProps {}

function CategoriesPreview({}: CategoriesPreviewProps) {
  const { isLoading: isLoadingProducts } = useProducts();
  const { categoriesMap, isLoading: isLoadingCategories } = useCategories();

  const isLoading = isLoadingProducts || isLoadingCategories;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {Object.entries(categoriesMap).map(([categoryTitle, products]) => (
        <CategoryPreview key={categoryTitle} title={categoryTitle} products={products} />
      ))}
    </>
  );
}

export default CategoriesPreview;
