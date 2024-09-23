import { AuthService } from "@core/Contexts/Shop/Auth/Domain/AuthService";
import { UserPrimitives } from "@core/Contexts/Shop/User/Domain/User";

export const onAuthStateChangeUseCase =
  (authService: AuthService) => (callback: (user: UserPrimitives | null) => void) => {
    return authService.onAuthStateChange(callback);
  };
