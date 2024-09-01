import { AuthService } from "@core/Contexts/Ecommerce/Auth/AuthService";
import { User } from "@core/Contexts/Ecommerce/User/User";

export const getCurrentUserUseCase = (authService: AuthService) => () =>
  new Promise<User | null>((resolve) => {
    const unsubscribe = authService.onAuthStateChange((user) => {
      unsubscribe();
      resolve(user);
    });
  });
