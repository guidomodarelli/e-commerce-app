import { User } from "@core/common/Domain";

export interface UserRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
}
