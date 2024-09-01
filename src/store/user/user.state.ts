import { User } from "@core/Contexts/Ecommerce/User/User";

export const INITIAL_STATE = {
  currentUser: undefined as User | null | undefined,
  error: null as Error | null,
};

export type UserState = typeof INITIAL_STATE;
