import { CartItem as CartItemType } from "@/global/types/cart-item.types";
import "./cart-item.styles.css";
import { useContext } from "react";
import { CartContext } from "@/contexts/Cart.context";

interface CartItemProps {
  cartItem: CartItemType;
}

function CartItem({ cartItem }: CartItemProps) {
  const { name, price, quantity, imageUrl } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };

  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <article className="checkout-item-container">
      <picture className="image-container">
        <img src={imageUrl} alt={name} />
      </picture>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">
        {Intl.NumberFormat("EN-en", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </span>
      <span className="price">
        {Intl.NumberFormat("EN-en", {
          style: "currency",
          currency: "USD",
        }).format(price * quantity)}
      </span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </article>
  );
}

export default CartItem;
