import { Product } from "@core/Contexts/Shop/Product/Domain/Product";
import { SET_PRODUCTS } from "./products.types";
import { AppDispatch } from "@store/store";

export const ProductAction = (dispatch: AppDispatch) => {
  return {
    setProducts(products: Product[]) {
      dispatch({ type: SET_PRODUCTS, payload: products });
    },
  };
};

export type ProductAction = Action<typeof SET_PRODUCTS, Product[]>;
