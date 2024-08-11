import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./cart.state";
import { Payload } from "@store/utils/payload.utils";
import { Cart, Product } from "@core/domain/entities";

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    openCart(draft) {
      draft.isCartOpen = true;
    },

    closeCart(draft) {
      draft.isCartOpen = false;
    },

    addItemToCart(draft, action: Payload<Product>) {
      draft.cart = Cart.add(draft.cart, action.payload);
    },

    removeItemFromCart(draft, action: Payload<Product>) {
      const cartItem = draft.cart.find((item) => item.id === action.payload.id);
      draft.cart =
        cartItem && cartItem.quantity > 1
          ? Cart.remove(draft.cart, action.payload)
          : Cart.drop(draft.cart, action.payload);
    },

    dropItemFromCart(draft, action: Payload<Product>) {
      draft.cart = Cart.drop(draft.cart, action.payload);
    },
  },
});

export const { openCart, closeCart, addItemToCart, removeItemFromCart, dropItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
