import { ShopData } from "@/shop-data";
import { Product } from "@core/domain/entities";

export interface ProductRepository {
  saveAll(shopData: ShopData[]): Promise<void>;
  findAll(): Promise<Product[]>;
}
