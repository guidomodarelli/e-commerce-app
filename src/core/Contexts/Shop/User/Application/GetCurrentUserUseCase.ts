import { AuthService } from "../../Auth/Domain/AuthService";
import { User } from "../Domain/User";

export const getCurrentUserUseCase = (authService: AuthService) => () =>
  new Promise<User | null>((resolve) => {
    const unsubscribe = authService.onAuthStateChange((user) => {
      unsubscribe();
      resolve(user);
    });
  });
