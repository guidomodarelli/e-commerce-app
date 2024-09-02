import { Product } from "./Product";

export interface ProductRepository {
  saveAll(products: Product[]): Promise<void>;
  findAll(): Promise<Product[]>;
}
