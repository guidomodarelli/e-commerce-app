import { User } from "@core/Contexts/Ecommerce/User/User";

export interface UserRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
}
