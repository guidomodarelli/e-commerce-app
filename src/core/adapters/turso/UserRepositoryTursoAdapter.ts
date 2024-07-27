import { Client } from "@libsql/client";
import { User } from "@core/domain/entities";
import { InfoExtra, UserRepository } from "@core/ports";

export class UserRepositoryTursoAdapter implements UserRepository {
  constructor(private readonly turso: Client) {}

  async save(user: User, extra?: InfoExtra): Promise<void> {
    const displayName = user.displayName ?? extra?.displayName ?? "";
    try {
      await this.turso.execute({
        sql: "INSERT INTO users (id, email, displayName) VALUES (?, ?, ?)",
        args: [user.id, user.email, displayName],
      });
    } catch (error) {
      console.error(error);
    }
  }
}
