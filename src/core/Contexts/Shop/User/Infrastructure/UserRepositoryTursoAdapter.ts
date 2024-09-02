import { User } from "@core/Contexts/Shop/User/Domain/User";
import { UserRepository } from "@core/Contexts/Shop/User/Domain";
import { Client } from "@libsql/client";

export class UserRepositoryTursoAdapter implements UserRepository {
  constructor(private readonly turso: Client) {}

  async save(user: User): Promise<void> {
    try {
      await this.turso.execute({
        sql: "INSERT INTO users (id, email, displayName) VALUES (?, ?, ?)",
        args: [user.id.value, user.email.value, user.displayName.value],
      });
    } catch (error) {
      console.error(error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findByEmail(_email: string): Promise<User | undefined> {
    // TODO: Method not implemented.
    throw new Error("Method not implemented.");
  }
}
