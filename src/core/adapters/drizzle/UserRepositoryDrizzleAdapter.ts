import { LibSQLDatabase } from "drizzle-orm/libsql";
import { User } from "@core/domain/entities";
import { InfoExtra, UserRepository } from "@core/ports";
import * as schema from "./schema";

export class UserRepositoryDrizzleAdapter implements UserRepository {
  constructor(private readonly db: LibSQLDatabase<typeof schema>) {}

  async save(user: User, extra?: InfoExtra): Promise<void> {
    const displayName = user.displayName ?? extra?.displayName ?? "";
    try {
      await this.db.insert(schema.users).values({
        id: user.id,
        email: user.email,
        displayName,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
