import { Cart, CartItem, Product } from "@core/domain/entities";
import { Dispatch } from "redux";
import { SET_CART_IS_CLOSE, SET_CART_IS_OPEN, SET_CART_ITEMS } from "./cart.types";
import { useSelector } from "react-redux";
import { selectCartItems } from "./cart.selector";

export const CartAction = (dispatch: Dispatch<CartAction>) => {
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
