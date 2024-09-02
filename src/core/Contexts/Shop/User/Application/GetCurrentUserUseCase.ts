import { AuthService } from "@core/Contexts/Shop/Auth/Domain/AuthService";
import { User } from "@core/Contexts/Shop/User/Domain/User";

export const getCurrentUserUseCase = (authService: AuthService) => () =>
  new Promise<User | null>((resolve) => {
    const unsubscribe = authService.onAuthStateChange((user) => {
      unsubscribe();
      resolve(user);
    });
  });
