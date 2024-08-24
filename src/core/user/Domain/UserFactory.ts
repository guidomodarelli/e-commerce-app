import { Factory, User } from "@core/Shared/Domain";
import { UserInfo } from "firebase/auth";

export const UserFactory: Factory<UserInfo, User> = {
  create(user: UserInfo): User {
    return {
      id: user.uid,
      email: user.email ?? "",
      displayName: user.displayName ?? "",
    };
  },
};
