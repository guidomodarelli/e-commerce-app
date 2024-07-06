import { CartContext } from "@/contexts/Cart.context";
import { useContext } from "react";
import Button from "../Button/Button.component";
import "./cart-dropdown.styles.css";

interface CartDropdownProps {}

function CartDropdown({}: CartDropdownProps) {
  const { isCartOpen, closeCart } = useContext(CartContext);

  return (
    <>
      <div data-active={isCartOpen} onClick={closeCart} className="cart-dropdown-back"></div>
      <div data-active={isCartOpen} className="cart-dropdown-container">
        <div className="cart-items"></div>
        <Button>Go to checkout</Button>
      </div>
    </>
  );
}

export default CartDropdown;
