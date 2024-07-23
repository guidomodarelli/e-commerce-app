import { Product } from "./Product";

export interface Category {
  id: string;
  title: string;
  img: string;
  products?: Product[];
}
