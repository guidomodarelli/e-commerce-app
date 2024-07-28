import { InfoExtra, UserRepository } from "@core/ports";
import { User } from "@core/domain/entities";

export const saveAuthUserUseCase = (userRepository: UserRepository) => (user: User, extra?: InfoExtra) => {
  return userRepository.save(user, extra);
};
