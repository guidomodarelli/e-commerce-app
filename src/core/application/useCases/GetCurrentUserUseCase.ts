import { User } from "@core/domain/entities";
import { AuthService } from "@core/ports";

export const getCurrentUserUseCase = (authService: AuthService) => () =>
  new Promise<User | null>((resolve) => {
    const unsubscribe = authService.onAuthStateChange((user) => {
      unsubscribe();
      resolve(user);
    });
  });
