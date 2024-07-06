import { Product } from "@/global/types/products.types";
import Button from "../Button/Button.component";
import "./product-card.styles.css";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button variant="inverted">Add to card</Button>
    </div>
  );
}

export default ProductCard;
