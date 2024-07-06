import { CartItem as CartItemType } from "@/global/types/cart-item.types";
import "./cart-item.styles.css";

interface CartItemProps {
  cartItem: CartItemType;
}

function CartItem({ cartItem }: CartItemProps) {
  const { name, quantity, imageUrl } = cartItem;
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
}

export default CartItem;
