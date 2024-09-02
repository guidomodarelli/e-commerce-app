import { User } from "@core/Contexts/Shop/User/Domain/User";
import { UserInfo } from "firebase/auth";

export const UserFirebaseFactory = {
  create(user: UserInfo): User {
    const id = user.uid;
    const email = user.email ?? "";
    const displayName = user.displayName ?? "";
    return User.create({ id, email, displayName });
  },
};
