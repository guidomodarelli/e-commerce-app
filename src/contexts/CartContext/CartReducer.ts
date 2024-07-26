import { Reducer } from "react";
import { CartState } from "./CartState";
import { CartAction, SET_CART_IS_CLOSE, SET_CART_IS_OPEN, SET_CART_ITEMS } from "./CartAction";
import { Cart } from "@core/domain/entities/Cart";

export const cartReducer: Reducer<CartState, CartAction> = (state, action) => {
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
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
        totalItems: Cart.getTotalItems(action.payload),
        totalPrice: Cart.getTotalPrice(action.payload),
      };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};
