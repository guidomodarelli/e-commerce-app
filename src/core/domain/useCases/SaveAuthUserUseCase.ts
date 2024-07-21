import { InfoExtra, UserRepository } from "@core/ports/UserRepository.port";
import { User } from "../entities/User";

export const SaveAuthUserUseCase = (userRepository: UserRepository) => (user: User, extra?: InfoExtra) => {
  return userRepository.save(user, extra);
};
