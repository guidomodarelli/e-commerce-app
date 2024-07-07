import { CartContext } from "@/contexts/Cart.context";
import { useContext } from "react";
import Button from "../Button/Button.component";
import "./cart-dropdown.styles.css";
import CartItem from "./cart-item/CartItem.component";
import { useNavigate } from "react-router-dom";
import { HeaderNavContext } from "@/contexts/HeaderNav.context";

interface CartDropdownProps {}

function CartDropdown({}: CartDropdownProps) {
  const { isCartOpen, closeCart, cartItems } = useContext(CartContext);
  const { closeHeaderNav } = useContext(HeaderNavContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
    closeHeaderNav();
    closeCart();
  };

  return (
    <>
      <div data-active={isCartOpen} onClick={closeCart} className="cart-dropdown-back"></div>
      <div data-active={isCartOpen} className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <Button onClick={handleClick}>Go to checkout</Button>
      </div>
    </>
  );
}

export default CartDropdown;
