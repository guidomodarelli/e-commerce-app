import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { CartAction, selectCart, selectCartItems, selectTotalItems, selectTotalPrice } from "@store/cart";

export const useCart = () => {
  const dispatch = useDispatch<Dispatch<CartAction>>();
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