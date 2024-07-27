import { Reducer } from "redux";
import { ProductAction } from "./products.actions";
import { INITIAL_STATE, ProductState } from "./products.state";
import { SET_PRODUCTS } from "./products.types";

export const productReducer: Reducer<ProductState, ProductAction> = (state = INITIAL_STATE, action): ProductState => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
};
