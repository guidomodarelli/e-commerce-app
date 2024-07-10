import useProducts from "@global/hooks/useProducts.hook";
import CategoryPreview from "../CategoryPreview/CategoryPreview.component";

interface CategoriesPreviewProps {}

function CategoriesPreview({}: CategoriesPreviewProps) {
  const { categories } = useProducts();

  return (
    <>
      {Object.entries(categories).map(([title, products]) => (
        <CategoryPreview key={title} title={title} products={products} />
      ))}
    </>
  );
}

export default CategoriesPreview;
