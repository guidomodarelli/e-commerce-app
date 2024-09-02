import { UserInfo } from "firebase/auth";
import { User } from "../Domain/User";

export const UserFirebaseFactory = {
  create(user: UserInfo): User {
    const id = user.uid;
    const email = user.email ?? "";
    const displayName = user.displayName ?? "";
    return User.create({ id, email, displayName });
  },
};
