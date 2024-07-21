/* eslint-disable unicorn/prevent-abbreviations */
import { Client } from "@libsql/client";
import { User } from "../../domain/entities/User";
import { InfoExtra, UserRepository } from "../../ports/UserRepository.port";

export class UserRepositoryTursoAdapter implements UserRepository {
  constructor(private readonly turso: Client) {}

  async save(user: User, extra?: InfoExtra): Promise<void> {
    const displayName = user.displayName ?? extra?.displayName ?? "";
    try {
      await this.turso.execute({
        sql: "INSERT INTO users (email, displayName) VALUES (?, ?)",
        args: [user.email, displayName],
      });
    } catch (error) {
      console.error(error);
    }
  }
}
