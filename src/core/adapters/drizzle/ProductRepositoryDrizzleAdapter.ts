import { Product } from "@core/domain/entities/Product";
import { ProductRepository } from "@core/ports/ProductRepository.port";
import { BatchItem } from "drizzle-orm/batch";
import { LibSQLDatabase } from "drizzle-orm/libsql";
import { category as categorySchema, products as productsSchema } from "./schema";
import * as schema from "@core/adapters/drizzle/schema";
import { eq } from "drizzle-orm";
import { ulid } from "ulid";
import { ShopData } from "@/shop-data";

export class ProductRepositoryDrizzleAdapter implements ProductRepository {
  constructor(private readonly db: LibSQLDatabase<typeof schema>) {}

  async saveAll(shopData: ShopData[]): Promise<void> {
    if (shopData.length === 0) return;

    const batchItems: BatchItem<"sqlite">[] = [];

    for (const data of shopData) {
      const { title, items } = data;
      const category = await this.db.query.category.findFirst({
        where: eq(categorySchema.name, title.toLowerCase()),
      });
      const categoryId: string = category?.id ?? ulid();
      if (!category) {
        await this.db.insert(categorySchema).values({
          id: categoryId,
          name: title.toLowerCase(),
        });
      }

      for (const product of items) {
        const { name, imageUrl, price } = product;
        batchItems.push(
          this.db.insert(productsSchema).values({
            name,
            imageUrl,
            price,
            categoryId: categoryId,
          }),
        );
      }

      await this.db.batch(batchItems as unknown as readonly [BatchItem<"sqlite">, ...BatchItem<"sqlite">[]]);
    }
  }

  findAll(): Promise<Product[]> {
    return this.db.query.products.findMany();
  }
}
