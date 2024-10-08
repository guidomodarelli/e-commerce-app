import { LibSQLDatabase } from "drizzle-orm/libsql";
import * as schema from "@core/Contexts/Shop/Shared/Infrastructure/drizzle/schema";
import { Category, CategoryRepository } from "../Domain";

export class CategoryRepositoryDrizzleAdapter implements CategoryRepository {
  constructor(private readonly db: LibSQLDatabase<typeof schema>) {}

  findAll(): Promise<Category[]> {
    return this.db.query.category.findMany();
  }
}
