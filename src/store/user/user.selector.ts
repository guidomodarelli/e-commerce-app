import { useSelector } from "react-redux";
import { AppRootState } from "../store";
import { UserState } from "./user.state";

export const useUserSelector = () => useSelector<AppRootState, UserState>((state) => state.user);
