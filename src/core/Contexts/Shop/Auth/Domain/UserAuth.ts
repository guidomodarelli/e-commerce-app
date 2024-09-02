import { OmitStrict } from "@core/Contexts/Shared/Domain/OmitStrict";
import { User } from "../../User/Domain/User";

export type UserAuth = Pick<OmitStrict<User, "id">, "email" | "displayName"> & { password: string };
