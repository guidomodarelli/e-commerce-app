import { CartAction, selectCart, selectCartItems, selectTotalItems, selectTotalPrice } from "@store/cart";
import { useAppDispatch, useAppSelector } from "@store/store";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cartAction = CartAction(dispatch);
  const { isCartOpen } = useAppSelector(selectCart);
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);
  const totalItems = useAppSelector(selectTotalItems);

  return {
    isCartOpen,
    cartItems,
    totalPrice,
    totalItems,
    ...cartAction,
  };
};
