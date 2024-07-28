import { AuthService } from "@core/ports";
import { User } from "@core/domain/entities";

export const onAuthStateChangeUseCase = (authService: AuthService) => (callback: (user: User | null) => void) => {
  return authService.onAuthStateChange(callback);
};
