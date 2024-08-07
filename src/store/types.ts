import { CartAction } from "./cart";
import { CategoryAction } from "./categories";
import { ProductAction } from "./products";
import { UserAction } from "./user";

export type Actions = ProductAction | CategoryAction | CartAction | UserAction;
