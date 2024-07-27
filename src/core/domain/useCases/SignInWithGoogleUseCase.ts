import { UserAuthSignInProvider } from "@core/ports";

export const signInWithGoogleUseCase = (userAuthSignInProvider: UserAuthSignInProvider) => () => {
  return userAuthSignInProvider.signIn();
};
