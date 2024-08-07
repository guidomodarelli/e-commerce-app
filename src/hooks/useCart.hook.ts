import { useSelector } from "react-redux";
import { CartAction, selectCart, selectCartItems, selectTotalItems, selectTotalPrice } from "@store/cart";
import { useAppDispatch } from "@store/store";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cartAction = CartAction(dispatch);
  const { isCartOpen } = useSelector(selectCart);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectTotalItems);

  return {
    isCartOpen,
    cartItems,
    totalPrice,
    totalItems,
    ...cartAction,
  };
};
