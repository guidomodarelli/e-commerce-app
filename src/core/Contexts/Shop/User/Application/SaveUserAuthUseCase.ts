import { UserRepository } from "@core/Contexts/Shop/User/Domain";
import { UserPrimitives } from "../Domain/User";

export const saveUserUseCase = (userRepository: UserRepository) => (user: UserPrimitives) => {
  return userRepository.save(user);
};
