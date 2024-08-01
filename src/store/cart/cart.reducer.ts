import { Reducer } from "react";
import { CartAction } from "./cart.actions";
import { CartState, INITIAL_STATE } from "./cart.state";
import { SET_CART_IS_CLOSE, SET_CART_IS_OPEN, ADD_ITEM, REMOVE_ITEM, DROP_ITEM } from "./cart.types";
import { Cart } from "@core/domain/entities";

export const cartReducer: Reducer<CartState, CartAction> = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case SET_CART_IS_OPEN:
      return {
        ...state,
        isCartOpen: true,
      };
    case SET_CART_IS_CLOSE:
      return {
        ...state,
        isCartOpen: false,
      };
    case ADD_ITEM: {
      const { payload } = action;
      return {
        ...state,
        cart: Cart.add(state.cart, payload),
      };
    }
    case REMOVE_ITEM: {
      const { payload } = action;
      return {
        ...state,
        cart: Cart.remove(state.cart, payload),
      };
    }
    case DROP_ITEM: {
      const { payload } = action;
      return {
        ...state,
        cart: Cart.drop(state.cart, payload),
      };
    }
    default:
      return state;
  }
};
