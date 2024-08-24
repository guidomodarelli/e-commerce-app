import { AuthService, User } from "@core/common/Domain";

export const getCurrentUserUseCase = (authService: AuthService) => () =>
  new Promise<User | null>((resolve) => {
    const unsubscribe = authService.onAuthStateChange((user) => {
      unsubscribe();
      resolve(user);
    });
  });
