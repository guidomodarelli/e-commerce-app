import { UserPrimitives } from "./User";

export interface UserRepository {
  save(user: UserPrimitives): Promise<void>;
  findByEmail(email: string): Promise<UserPrimitives | undefined>;
}
