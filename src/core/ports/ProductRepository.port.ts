import { ShopData } from "@/shop-data";
import { Product } from "../domain/entities/Product";

export interface ProductRepository {
  saveAll(shopData: ShopData[]): Promise<void>;
  findAll(): Promise<Product[]>;
}
