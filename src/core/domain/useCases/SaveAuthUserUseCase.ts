import { InfoExtra, UserRepository } from "@core/ports";
import { User } from "../entities/User";

export const saveAuthUserUseCase = (userRepository: UserRepository) => (user: User, extra?: InfoExtra) => {
  return userRepository.save(user, extra);
};
