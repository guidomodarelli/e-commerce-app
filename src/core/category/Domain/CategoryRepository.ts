import { Category } from "@core/category/Domain";

export interface CategoryRepository {
  findAll(): Promise<Category[]>;
}
