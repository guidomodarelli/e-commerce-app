import { useAppSelector } from "@store/store";
import { selectUser, UserAction } from "@store/user";
import { useDispatch } from "react-redux";

const useUser = () => {
  const dispatch = useDispatch();
  const userAction = UserAction(dispatch);
  const { currentUser } = useAppSelector(selectUser);

  return {
    currentUser,
    ...userAction,
  };
};

export default useUser;
