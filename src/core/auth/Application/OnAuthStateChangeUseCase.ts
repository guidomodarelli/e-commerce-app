import { AuthService } from "@core/Contexts/Ecommerce/Auth/AuthService";
import { User } from "@core/Contexts/Ecommerce/User/User";

export const onAuthStateChangeUseCase = (authService: AuthService) => (callback: (user: User | null) => void) => {
  return authService.onAuthStateChange(callback);
};
