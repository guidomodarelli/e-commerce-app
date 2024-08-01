import { CartItem } from "@core/domain/entities";

export type CartMap = Record<string, CartItem | undefined>;

export const INITIAL_STATE = {
  isCartOpen: false,
  cart: {} as CartMap,
};

export type CartState = typeof INITIAL_STATE;
