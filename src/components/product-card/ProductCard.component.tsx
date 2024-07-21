import { toast } from "sonner";
import Button from "../Button/Button.component";
import "./product-card.styles.css";
import { useCart } from "@global/contexts/Cart.context";
import { Product } from "@core/domain/entities";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { name, price, imageUrl } = product;
  const { addItemToCart, cartItems } = useCart();

  const currentCartItem = cartItems.find((item) => item.id === product.id);
  const quantity = (currentCartItem?.quantity ?? 0) + 1;

  const addProductToCart = () => {
    toast.info(
      `The product "${product.name}" has been added successfully. Now, you have ${quantity.toString()} in your cart.`,
    );
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <div className="img-container">
        <img src={imageUrl} alt={name} />
        <Button variant="inverted" onClick={addProductToCart}>
          Add to card
        </Button>
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">
          {Intl.NumberFormat("EN-en", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
