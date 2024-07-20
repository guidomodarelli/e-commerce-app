import { UserRepository } from "@/core/ports/UserRepository.port";
import { User } from "../entities/User";

interface AdditionalAuthInformation {
  displayName?: string;
}

export const SaveAuthUserUseCase =
  (userRepository: UserRepository) => (user: User, additionalInformation?: AdditionalAuthInformation) => {
    return userRepository.save<AdditionalAuthInformation>(user, additionalInformation);
  };
