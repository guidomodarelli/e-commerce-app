import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { productReducer } from "./products/products.reducer";
import { categoryReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer,
});
