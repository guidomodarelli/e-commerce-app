import { User } from "../domain/entities/User";

export interface UserRepository {
  save<Info>(user: User, additionalInformation?: Info): Promise<void>;
}
