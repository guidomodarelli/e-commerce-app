import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./cart.state";
import { Payload } from "@store/utils/payload.utils";
import { Cart } from "@core/Contexts/Shop/Cart/Domain";
import { Product } from "@core/Contexts/Shop/Product/Domain";

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
      draft.cart = Cart.remove(draft.cart, action.payload);
    },

    dropItemFromCart(draft, action: Payload<Product>) {
      draft.cart = Cart.drop(draft.cart, action.payload);
    },
  },
});

export const { openCart, closeCart, addItemToCart, removeItemFromCart, dropItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
