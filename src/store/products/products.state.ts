import { Product } from "@core/Contexts/Shop/Product/Domain";

export const INITIAL_STATE = {
  list: [] as Product[],
};

export type ProductState = typeof INITIAL_STATE;
