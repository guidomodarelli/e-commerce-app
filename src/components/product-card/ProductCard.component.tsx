import { Product } from "@/global/types/products.types";
import Button from "../Button/Button.component";
import "./product-card.styles.css";
import { useContext } from "react";
import { CartContext } from "@/contexts/Cart.context";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">
          {Intl.NumberFormat("EN-en", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </span>
      </div>
      <Button variant="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
}

export default ProductCard;
