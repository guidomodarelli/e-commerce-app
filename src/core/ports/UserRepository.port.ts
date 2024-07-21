import { User } from "../domain/entities/User";

export interface InfoExtra {
  displayName: string;
}

export interface UserRepository {
  save(user: User, extra?: InfoExtra): Promise<void>;
}
