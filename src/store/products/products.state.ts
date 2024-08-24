import { Product } from "@core/product/Domain";

export const INITIAL_STATE = {
  list: [] as Product[],
};

export type ProductState = typeof INITIAL_STATE;
