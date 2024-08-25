import { User, UserEntity } from "@core/common/Domain";
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

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });
    if (user) {
      return UserEntity.create(user).toPrimitives();
    }
    return undefined;
  }
}
