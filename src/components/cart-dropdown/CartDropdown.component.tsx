import useClickOutside from "@/hooks/useComponentVisible.hook";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.component";
import "./cart-dropdown.styles.css";
import CartItem from "./cart-item/CartItem.component";
import { useCart } from "@/contexts/Cart.context";
import { useHeaderNav } from "@/contexts/HeaderNav.context";

interface CartDropdownProps {}

function CartDropdown({}: CartDropdownProps) {
  const { isCartOpen, closeCart, cartItems } = useCart();
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
