import { Cart, CartItem } from "@core/cart/Domain";
import { Product } from "@core/product/Domain";
import { SET_CART_IS_CLOSE, SET_CART_IS_OPEN, SET_CART_ITEMS } from "./cart.types";
import { selectCartItems } from "../cart.selector";
import { AppDispatch } from "@store/store";
import { useSelector } from "react-redux";

export const CartAction = (dispatch: AppDispatch) => {
  //! Using "useAppSelector": Cannot access 'cartReducer' before initialization
  const cartItems = useSelector(selectCartItems);

  return {
    openCart: () => {
      dispatch({ type: SET_CART_IS_OPEN });
    },
    closeCart: () => {
      dispatch({ type: SET_CART_IS_CLOSE });
    },
    addItemToCart: (productToAdd: Product) => {
      dispatch({ type: SET_CART_ITEMS, payload: Cart.add(cartItems, productToAdd) });
    },
    removeItemFromCart: (cartItemToUpdate: CartItem) => {
      const cartItem = cartItems.find((item) => item.id === cartItemToUpdate.id);
      if (cartItem && cartItem.quantity > 1) {
        dispatch({ type: SET_CART_ITEMS, payload: Cart.remove(cartItems, cartItemToUpdate) });
      } else {
        dispatch({ type: SET_CART_ITEMS, payload: Cart.drop(cartItems, cartItemToUpdate) });
      }
    },
    dropItemFromCart: (cartItemToRemove: CartItem) => {
      dispatch({ type: SET_CART_ITEMS, payload: Cart.drop(cartItems, cartItemToRemove) });
    },
  };
};

export type CartAction =
  | Action<typeof SET_CART_IS_OPEN>
  | Action<typeof SET_CART_IS_CLOSE>
  | Action<typeof SET_CART_ITEMS, CartItem[]>;
