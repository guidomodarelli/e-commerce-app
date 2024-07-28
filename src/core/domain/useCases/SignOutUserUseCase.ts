import { UserAuthSignOut } from "@core/ports";

export const signOutUserUseCase = (userAuth: UserAuthSignOut) => () => {
  return userAuth.signOut();
};
