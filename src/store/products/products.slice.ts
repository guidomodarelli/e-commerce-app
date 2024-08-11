import { Product } from "@core/domain/entities";
import { createSlice } from "@reduxjs/toolkit";
import { Payload } from "@store/utils/payload.utils";
import { INITIAL_STATE } from "./products.state";

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
