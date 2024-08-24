import { CartItem } from "@core/cart/Domain";

export type CartMap = Record<string, CartItem | undefined>;

export const INITIAL_STATE = {
  isCartOpen: false,
  cart: [] as CartItem[],
};

export type CartState = typeof INITIAL_STATE;
