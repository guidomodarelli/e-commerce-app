import { Cart, CartItem } from "@core/domain/entities";
import { createSelector } from "reselect";
import { AppRootState } from "../store";

export const selectCart = (state: AppRootState) => state.cart;

export const selectCartItems = createSelector([selectCart], ({ cart }): CartItem[] =>
  Object.values(cart).filter((item) => !!item),
);

export const selectTotalItems = createSelector([selectCart], ({ cart: cartItems }) => Cart.getTotalItems(cartItems));

export const selectTotalPrice = createSelector([selectCart], ({ cart: cartItems }) => Cart.getTotalPrice(cartItems));
