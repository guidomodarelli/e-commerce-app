import { Client } from "@libsql/client";
import { UserRepository } from "../Domain";
import { UserPrimitives } from "../Domain/User";

export class UserRepositoryTursoAdapter implements UserRepository {
  constructor(private readonly turso: Client) {}

  async save(user: UserPrimitives): Promise<void> {
    try {
      await this.turso.execute({
        sql: "INSERT INTO users (id, email, displayName) VALUES (?, ?, ?)",
        args: [user.id, user.email, user.displayName],
      });
    } catch (error) {
      console.error(error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findByEmail(_email: string): Promise<UserPrimitives | undefined> {
    // TODO: Method not implemented.
    throw new Error("Method not implemented.");
  }
}
