import { Category } from "@core/domain/entities";

export const INITIAL_STATE = {
  categories: [] as Category[],
  isLoading: false,
  isFetched: false,
  error: null as Error | null,
};

export type CategoryState = typeof INITIAL_STATE;
