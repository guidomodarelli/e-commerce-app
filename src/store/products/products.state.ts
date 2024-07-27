import { Product } from "@core/domain/entities";

export const INITIAL_STATE = {
  list: [] as Product[],
};

export type ProductState = typeof INITIAL_STATE;
