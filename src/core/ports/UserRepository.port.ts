import { User } from "@core/domain/entities";
export interface InfoExtra {
  displayName: string;
}

export interface UserRepository {
  save(user: User, extra?: InfoExtra): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
}
