import { User } from "@core/Shared/Domain";
import { UserRepository } from "@core/user/Domain";

export const saveUserAuthUseCase = (userRepository: UserRepository) => (user: User) => {
  return userRepository.save(user);
};
