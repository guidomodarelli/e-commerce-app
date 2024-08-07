import { useAppDispatch, useAppSelector } from "@store/store";
import { selectUser, UserAction } from "@store/user";

const useUser = () => {
  const dispatch = useAppDispatch();
  const userAction = UserAction(dispatch);
  const { currentUser } = useAppSelector(selectUser);

  return {
    currentUser,
    ...userAction,
  };
};

export default useUser;
