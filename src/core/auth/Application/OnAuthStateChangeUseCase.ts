import { AuthService, User } from "@core/common/Domain";

export const onAuthStateChangeUseCase = (authService: AuthService) => (callback: (user: User | null) => void) => {
  return authService.onAuthStateChange(callback);
};
