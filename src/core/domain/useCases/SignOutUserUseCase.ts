import { AuthService, UserAuthSignOut } from "@core/ports";

export const signOutUserUseCase = (userAuth: UserAuthSignOut, authService: AuthService) => async () => {
  await userAuth.signOut();
  authService.loggedOut();
};
