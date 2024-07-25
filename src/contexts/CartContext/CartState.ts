import { CartItem } from "@core/domain/entities";

export const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [] as CartItem[],
  totalItems: 0,
  totalPrice: 0,
};

export type CartState = typeof INITIAL_STATE;
