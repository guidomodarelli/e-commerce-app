import { Product } from "@core/Contexts/Shop/Product/Domain";
import {
  addItemToCart,
  closeCart,
  dropItemFromCart,
  openCart,
  removeItemFromCart,
  selectCart,
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
} from "@store/cart";
import { useAppDispatch, useAppSelector } from "@store/store";

export const useCart = () => {
  const dispatch = useAppDispatch();
  // const cartAction = CartAction(dispatch);
  const { isCartOpen } = useAppSelector(selectCart);
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);
  const totalItems = useAppSelector(selectTotalItems);

  return {
    isCartOpen,
    cartItems,
    totalPrice,
    totalItems,
    openCart: () => {
      dispatch(openCart());
    },
    closeCart: () => {
      dispatch(closeCart());
    },
    addItemToCart: (productToAdd: Product) => {
      dispatch(addItemToCart(productToAdd));
    },
    removeItemFromCart: (productToRemove: Product) => {
      dispatch(removeItemFromCart(productToRemove));
    },
    dropItemFromCart: (productToDrop: Product) => {
      dispatch(dropItemFromCart(productToDrop));
    },
  };
};
