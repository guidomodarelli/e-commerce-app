import { UserAuthSignOut } from "@core/auth/Domain";
import { AuthService } from "@core/Shared/Domain";

export const signOutUserUseCase = (userAuth: UserAuthSignOut, authService: AuthService) => async () => {
  await userAuth.signOut();
  authService.loggedOut();
};
