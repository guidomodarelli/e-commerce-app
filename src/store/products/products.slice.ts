import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./products.state";
import { Product } from "@core/Contexts/Shop/Product/Domain";

export const productSlice = createSlice({
  name: "product",
  initialState: INITIAL_STATE,
  reducers: {
    setProducts(draft, action: Payload<Product[]>) {
      draft.list = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
