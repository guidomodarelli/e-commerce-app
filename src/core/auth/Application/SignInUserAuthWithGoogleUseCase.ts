import { UserAuthSignInProvider } from "@core/auth/Domain";
import { AuthService } from "@core/Shared/Domain";

export const signInWithGoogleUseCase =
  (userAuthSignInProvider: UserAuthSignInProvider, authService: AuthService) => async () => {
    const user = await userAuthSignInProvider.signIn();
    await authService.loggedIn(user);
    return user;
  };
