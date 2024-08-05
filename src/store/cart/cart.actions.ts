import { Cart, CartItem, Product } from "@core/domain/entities";
import { Dispatch } from "redux";
import { SET_CART_IS_CLOSE, SET_CART_IS_OPEN, SET_CART_ITEMS } from "./cart.types";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, selectCartItems, selectTotalItems, selectTotalPrice } from "./cart.selector";

export const useCart = () => {
  const dispatch = useDispatch<Dispatch<CartAction>>();
  const { cart, isCartOpen } = useSelector(selectCart);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectTotalItems);

  return {
    isCartOpen,
    cartItems,
    totalPrice,
    totalItems,
    openCart: () => {
      dispatch({ type: SET_CART_IS_OPEN });
    },
    closeCart: () => {
      dispatch({ type: SET_CART_IS_CLOSE });
    },
    addItemToCart: (productToAdd: Product) => {
      dispatch({ type: SET_CART_ITEMS, payload: Cart.add(cart, productToAdd) });
    },
    removeItemFromCart: (cartItemToUpdate: CartItem) => {
      const cartItem = cart.find((item) => item.id === cartItemToUpdate.id);
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
