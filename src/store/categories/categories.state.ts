import { Category } from "@core/domain/entities";

export const INITIAL_STATE = {
  list: [] as Category[],
};

export type CategoryState = typeof INITIAL_STATE;
