import { User } from "@core/Contexts/Shop/User/Domain/User";

export interface UserRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
}
