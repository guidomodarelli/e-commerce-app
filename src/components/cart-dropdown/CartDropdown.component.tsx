import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.component";
import styles from "./cart-dropdown.module.css";
import CartItem from "./cart-item/CartItem.component";
import { useHeaderNav } from "@/contexts/HeaderNav.context";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useCart } from "@store/cart";
import { useDispatch } from "react-redux";

interface CartDropdownProps {}

function CartDropdown({}: CartDropdownProps) {
  const dispatch = useDispatch();
  const { isCartOpen, closeCart, cartItems } = useCart(dispatch);
  const { closeHeaderNav } = useHeaderNav();
  const navigate = useNavigate();
  const ref = useRef(null);
  useClickAway(ref, () => {
    if (isCartOpen) {
      closeCart();
    }
  });

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    closeHeaderNav();
    closeCart();
  };

  return (
    <div ref={ref} data-active={isCartOpen} className={styles["cart-dropdown-container"]}>
      <div className={styles["cart-items"]}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </div>
  );
}

export default CartDropdown;
