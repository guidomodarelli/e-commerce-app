import { User } from "@core/common/Domain";
import { UserRepository } from "@core/user/Domain";

export const saveUserUseCase = (userRepository: UserRepository) => (user: User) => {
  return userRepository.save(user);
};
