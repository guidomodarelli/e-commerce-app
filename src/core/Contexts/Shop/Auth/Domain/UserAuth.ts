import { User } from "../../User/Domain/User";

export type UserAuth = Pick<Omit<User, "id">, "email" | "displayName"> & { password: string };
