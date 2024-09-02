import { UserAuthSignOut } from "@core/Contexts/Shop/Auth/Domain";
import { AuthService } from "../Domain/AuthService";

export const signOutUserUseCase = (userAuth: UserAuthSignOut, authService: AuthService) => async () => {
  await userAuth.signOut();
  authService.loggedOut();
};
