import { UserAuthSignInProvider } from "@core/Contexts/Shop/Auth/Domain";
import { AuthService } from "@core/Contexts/Shop/Auth/Domain/AuthService";

export const signInWithGoogleUseCase =
  (userAuthSignInProvider: UserAuthSignInProvider, authService: AuthService) => async () => {
    const user = await userAuthSignInProvider.signIn();
    await authService.loggedIn(user);
    return user;
  };
