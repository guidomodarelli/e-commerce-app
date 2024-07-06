import { CartContext } from "@/contexts/Cart.context";
import { useContext } from "react";
import Button from "../Button/Button.component";
import "./cart-dropdown.styles.css";
import CartItem from "./cart-item/CartItem.component";

interface CartDropdownProps {}

function CartDropdown({}: CartDropdownProps) {
  const { isCartOpen, closeCart, cartItems } = useContext(CartContext);

  return (
    <>
      <div data-active={isCartOpen} onClick={closeCart} className="cart-dropdown-back"></div>
      <div data-active={isCartOpen} className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <Button>Go to checkout</Button>
      </div>
    </>
  );
}

export default CartDropdown;
