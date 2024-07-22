import { Product } from "../domain/entities/Product";

export interface ProductRepository {
  saveAll(products: Product[]): Promise<void>;
  findAll(): Promise<Product[]>;
}
