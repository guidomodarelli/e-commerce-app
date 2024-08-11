import { Reducer } from "react";
import { CartAction } from "./cart.actions";
import { CartState, INITIAL_STATE } from "../cart.state";
import { SET_CART_IS_CLOSE, SET_CART_IS_OPEN, SET_CART_ITEMS } from "./cart.types";

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
    case SET_CART_ITEMS: {
      const { payload } = action;
      return {
        ...state,
        cart: payload,
      };
    }
    default:
      return state;
  }
};
