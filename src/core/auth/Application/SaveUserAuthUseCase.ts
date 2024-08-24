import { User } from "@core/common/Domain";
import { UserRepository } from "@core/user/Domain";

export const saveUserAuthUseCase = (userRepository: UserRepository) => (user: User) => {
  return userRepository.save(user);
};
