import { LibSQLDatabase } from "drizzle-orm/libsql";
import { User } from "../../domain/entities/User";
import { InfoExtra, UserRepository } from "../../ports/UserRepository.port";
import { userTable } from "./schemas/user";

export class UserRepositoryDrizzleAdapter implements UserRepository {
  constructor(private readonly db: LibSQLDatabase) {}

  async save(user: User, extra?: InfoExtra): Promise<void> {
    const displayName = user.displayName ?? extra?.displayName ?? "";
    try {
      await this.db.insert(userTable).values({
        email: user.email,
        displayName,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
