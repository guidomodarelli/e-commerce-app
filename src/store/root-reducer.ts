import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { productReducer } from "./products/products.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
});
