import { Category } from "@core/domain/entities";
import { CategoryRepository } from "@core/ports/CategoryRepository.port";
import { LibSQLDatabase } from "drizzle-orm/libsql";
import * as schema from "@core/adapters/drizzle/schema";

export class CategoryRepositoryDrizzleAdapter implements CategoryRepository {
  constructor(private readonly db: LibSQLDatabase<typeof schema>) {}

  findAll(): Promise<Category[]> {
    return this.db.query.category.findMany();
  }
}
