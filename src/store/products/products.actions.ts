import { Product } from "@core/domain/entities";
import { Dispatch } from "redux";

export const SET_PRODUCTS = "products/SET_PRODUCTS";

export const ProductAction = (dispatch: Dispatch<ProductAction>) => {
  return {
    setProducts(products: Product[]) {
      dispatch({ type: SET_PRODUCTS, payload: products });
    },
  };
};

export type ProductAction = Action<typeof SET_PRODUCTS, Product[]>;
