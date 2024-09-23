import { AuthService } from "../../Auth/Domain/AuthService";
import { UserPrimitives } from "../Domain/User";

export const getCurrentUserUseCase = (authService: AuthService) => () =>
  new Promise<UserPrimitives | null>((resolve) => {
    const unsubscribe = authService.onAuthStateChange((user) => {
      unsubscribe();
      resolve(user);
    });
  });
