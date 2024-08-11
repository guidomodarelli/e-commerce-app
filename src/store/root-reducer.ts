import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { productReducer } from "./products";
import { categoryReducer } from "./categories";
import { cartReducer } from "./cart";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer,
});
