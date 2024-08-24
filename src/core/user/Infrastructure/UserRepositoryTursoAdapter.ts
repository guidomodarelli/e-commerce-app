import { User } from "@core/Shared/Domain";
import { UserRepository } from "@core/user/Domain";
import { Client } from "@libsql/client";

export class UserRepositoryTursoAdapter implements UserRepository {
  constructor(private readonly turso: Client) {}

  async save(user: User): Promise<void> {
    try {
      await this.turso.execute({
        sql: "INSERT INTO users (id, email, displayName) VALUES (?, ?, ?)",
        args: [user.id, user.email, user.displayName],
      });
    } catch (error) {
      console.error(error);
    }
  }

  findByEmail(email: string): Promise<User | undefined> {
    // TODO: Method not implemented.
    throw new Error("Method not implemented.");
  }
}
