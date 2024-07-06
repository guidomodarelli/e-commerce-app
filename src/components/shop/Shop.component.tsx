import ProductCard from "../product-card/ProductCard.component";
import useProducts from "./useProducts.hook";
import "./shop.styles.css";

interface ShopProps {}

function Shop({}: ShopProps) {
  const { data } = useProducts();
  return (
    <div className="products-container">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
