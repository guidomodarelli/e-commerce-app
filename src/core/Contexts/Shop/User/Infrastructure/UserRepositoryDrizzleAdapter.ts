import { LibSQLDatabase } from "drizzle-orm/libsql";
import { schema } from "../../Shared/Infrastructure/drizzle";
import { UserRepository } from "../Domain";
import { User, UserPrimitives } from "../Domain/User";

export class UserRepositoryDrizzleAdapter implements UserRepository {
  constructor(private readonly db: LibSQLDatabase<typeof schema>) {}

  async save(user: UserPrimitives): Promise<void> {
    try {
      await this.db.insert(schema.users).values(user);
    } catch (error) {
      console.error(error);
    }
  }

  async findByEmail(email: string): Promise<UserPrimitives | undefined> {
    const user = await this.db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });
    if (user) {
      return User.create(user).toPrimitives();
    }
    return undefined;
  }
}
