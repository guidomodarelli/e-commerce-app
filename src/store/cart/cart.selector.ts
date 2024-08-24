import { Cart, CartItem } from "@core/cart/Domain";
import { createSelector } from "reselect";
import { AppRootState } from "../store";

export const selectCart = (state: AppRootState) => state.cart;

export const selectCartItems = createSelector([selectCart], ({ cart }): CartItem[] => cart);

export const selectTotalItems = createSelector([selectCart], ({ cart: cartItems }) => Cart.getTotalItems(cartItems));

export const selectTotalPrice = createSelector([selectCart], ({ cart: cartItems }) => Cart.getTotalPrice(cartItems));
