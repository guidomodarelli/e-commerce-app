import { Category } from "@core/domain/entities";

export interface CategoryRepository {
  findAll(): Promise<Category[]>;
}
