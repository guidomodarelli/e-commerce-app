import { CartItem, Product } from "@core/domain/entities";
import { Dispatch } from "redux";
import { ADD_ITEM, DROP_ITEM, REMOVE_ITEM, SET_CART_IS_CLOSE, SET_CART_IS_OPEN } from "./cart.types";
import { useSelector } from "react-redux";
import { selectCart, selectCartItems, selectTotalItems, selectTotalPrice } from "./cart.selector";

export const useCart = (dispatch: Dispatch<CartAction>) => {
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
      dispatch({ type: ADD_ITEM, payload: productToAdd });
    },
    removeItemFromCart: (cartItemToUpdate: CartItem) => {
      const { id } = cartItemToUpdate;
      if (!cart[id]) return;
      if (cart[id].quantity > 1) {
        dispatch({ type: REMOVE_ITEM, payload: cartItemToUpdate });
      } else {
        dispatch({ type: DROP_ITEM, payload: cartItemToUpdate });
      }
    },
    dropItemFromCart: (cartItemToRemove: CartItem) => {
      dispatch({ type: DROP_ITEM, payload: cartItemToRemove });
    },
  };
};

export type CartAction =
  | Action<typeof SET_CART_IS_OPEN>
  | Action<typeof SET_CART_IS_CLOSE>
  | Action<typeof ADD_ITEM, Product>
  | Action<typeof REMOVE_ITEM, CartItem>
  | Action<typeof DROP_ITEM, CartItem>;
