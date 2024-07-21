import { Product } from "@/core/domain/entities/Product";
import { ProductRepository } from "@/core/ports/ProductRepository.port";
import { BatchItem } from "drizzle-orm/batch";
import { LibSQLDatabase } from "drizzle-orm/libsql";
import { productTable } from "./schemas/product";

export class ProductRepositoryDrizzleTursoAdapter implements ProductRepository {
  constructor(private readonly db: LibSQLDatabase) {}

  async saveAll(products: Product[]): Promise<void> {
    if (products.length === 0) return;

    const batchItems: BatchItem<"sqlite">[] = [];

    for (const product of products) {
      const { category, name, imageUrl, price } = product;
      batchItems.push(
        this.db.insert(productTable).values({
          category,
          name,
          imageUrl,
          price,
        }),
      );
    }

    await this.db.batch(batchItems as unknown as readonly [BatchItem<"sqlite">, ...BatchItem<"sqlite">[]]);
  }

  findAll(): Promise<Product[]> {
    return this.db.select().from(productTable);
  }
}
