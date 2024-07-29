import { AuthService, UserAuthSignInProvider } from "@core/ports";

export const signInWithGoogleUseCase =
  (userAuthSignInProvider: UserAuthSignInProvider, authService: AuthService) => async () => {
    const user = await userAuthSignInProvider.signIn();
    await authService.loggedIn(user);
    return user;
  };
