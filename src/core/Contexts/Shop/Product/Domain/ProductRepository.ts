import { ShopData } from "@/shop-data";
import { Product } from "./Product";

export interface ProductRepository {
  saveAll(shopData: ShopData[]): Promise<void>;
  findAll(): Promise<Product[]>;
}
