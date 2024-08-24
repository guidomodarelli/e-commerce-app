import { ShopData } from "@/shop-data";
import { Product, ProductRepository } from "@core/product/Domain";
import * as schema from "@core/Shared/Infrastructure/drizzle/schema";
import { category as categorySchema, products as productsSchema } from "@core/Shared/Infrastructure/drizzle/schema";
import { eq } from "drizzle-orm";
import { BatchItem } from "drizzle-orm/batch";
import { LibSQLDatabase } from "drizzle-orm/libsql";
import { ulid } from "ulid";

export class ProductRepositoryDrizzleAdapter implements ProductRepository {
  constructor(private readonly db: LibSQLDatabase<typeof schema>) {}

  async saveAll(shopData: ShopData[]): Promise<void> {
    if (shopData.length === 0) return;

    const batchItems: BatchItem<"sqlite">[] = [];

    for (const data of shopData) {
      const { title, img, items } = data;
      const category = await this.db.query.category.findFirst({
        where: eq(categorySchema.title, title.toLowerCase()),
      });
      const categoryId: string = category?.id ?? ulid();
      if (!category) {
        await this.db.insert(categorySchema).values({
          id: categoryId,
          title: title.toLowerCase(),
          img,
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

  async findAll(): Promise<Product[]> {
    const products = await this.db.query.products.findMany({
      with: {
        category: {
          columns: {
            id: true,
          },
        },
      },
    });

    return products.map((product) => {
      return {
        ...product,
        categoryId: product.category.id,
      };
    });
  }
}
