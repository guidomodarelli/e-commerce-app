import CategoryPreview from "../Categories/CategoryPreview/CategoryPreview.component";
import "./shop.styles.css";
import useCategories from "./useCategories.hook";

interface ShopProps {}

function Shop({}: ShopProps) {
  const { categories } = useCategories();
  return (
    <div className="shop-container">
      {Object.entries(categories).map(([title, products]) => (
        <CategoryPreview key={title} title={title} products={products} />
      ))}
    </div>
  );
}

export default Shop;
