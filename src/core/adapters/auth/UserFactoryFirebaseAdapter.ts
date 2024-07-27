import { User } from "@core/domain/entities";
import { Factory } from "@core/ports/factories/UserFactory";
import { UserInfo } from "firebase/auth";

export const UserFactoryFirebaseAdapter: Factory<UserInfo, User> = {
  create(user: UserInfo): User {
    return {
      id: user.uid,
      email: user.email ?? "",
      displayName: user.displayName ?? "",
    };
  },
};
