import { UserAuthSignOut } from "@core/auth/Domain";
import { AuthService } from "@core/common/Domain";

export const signOutUserUseCase = (userAuth: UserAuthSignOut, authService: AuthService) => async () => {
  await userAuth.signOut();
  authService.loggedOut();
};
