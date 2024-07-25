import { CartState } from "./CartState";

export const SET_CART_IS_OPEN = "SET_CART_IS_OPEN";
export const SET_CART_IS_CLOSE = "SET_CART_IS_CLOSE";
export const SET_CART_ITEMS = "SET_CART_ITEMS";

export type CartAction =
  | Action<typeof SET_CART_IS_OPEN>
  | Action<typeof SET_CART_IS_CLOSE>
  | Action<typeof SET_CART_ITEMS, CartState["cartItems"]>;
