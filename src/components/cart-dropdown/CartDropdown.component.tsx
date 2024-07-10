import { CartContext } from "@/contexts/Cart.context";
import useClickOutside from "@/global/hooks/useComponentVisible.hook";
import useHeaderNav from "@/global/hooks/useHeaderNav.hook";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.component";
import "./cart-dropdown.styles.css";
import CartItem from "./cart-item/CartItem.component";

interface CartDropdownProps {}

function CartDropdown({}: CartDropdownProps) {
  const { isCartOpen, closeCart, cartItems } = useContext(CartContext);
  const { closeHeaderNav } = useHeaderNav();
  const navigate = useNavigate();
  const { ref } = useClickOutside<HTMLDivElement>(closeCart);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    closeHeaderNav();
    closeCart();
  };

  return (
    <div ref={ref} data-active={isCartOpen} className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </div>
  );
}

export default CartDropdown;
