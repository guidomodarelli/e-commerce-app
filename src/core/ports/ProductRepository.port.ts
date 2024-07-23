import { ShopData } from "@/shop-data";
import { Category } from "@core/domain/entities";

export interface ProductRepository {
  saveAll(shopData: ShopData[]): Promise<void>;
  findAllGroupByCategory(): Promise<Category[]>;
}
