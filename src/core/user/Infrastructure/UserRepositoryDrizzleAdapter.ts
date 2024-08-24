import { User } from "@core/common/Domain";
import * as schema from "@core/common/Infrastructure/drizzle/schema";
import { UserRepository } from "@core/user/Domain";
import { LibSQLDatabase } from "drizzle-orm/libsql";

export class UserRepositoryDrizzleAdapter implements UserRepository {
  constructor(private readonly db: LibSQLDatabase<typeof schema>) {}

  async save(user: User): Promise<void> {
    try {
      await this.db.insert(schema.users).values({
        id: user.id,
        email: user.email,
        displayName: user.displayName,
      });
    } catch (error) {
      console.error(error);
    }
  }

  findByEmail(email: string): Promise<User | undefined> {
    return this.db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });
  }
}
