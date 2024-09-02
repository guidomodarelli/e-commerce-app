import { UserRepository } from "@core/Contexts/Shop/User/Domain";
import { User } from "../Domain/User";

export const saveUserUseCase = (userRepository: UserRepository) => (user: User) => {
  return userRepository.save(user);
};
