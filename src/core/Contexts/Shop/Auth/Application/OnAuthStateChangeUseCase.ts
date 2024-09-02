import { AuthService } from "@core/Contexts/Shop/Auth/Domain/AuthService";
import { User } from "@core/Contexts/Shop/User/Domain/User";

export const onAuthStateChangeUseCase = (authService: AuthService) => (callback: (user: User | null) => void) => {
  return authService.onAuthStateChange(callback);
};
