import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { productReducer } from "./products/products.slice";
import { categoryReducer } from "./categories/categories.slice";
import { cartReducer } from "./cart/cart.slice";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer,
});
