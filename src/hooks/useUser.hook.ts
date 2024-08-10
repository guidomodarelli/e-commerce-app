import { User } from "@core/domain/entities";
import { useAppDispatch, useAppSelector } from "@store/store";
import { selectUser, setCurrentUser } from "@store/user";

const useUser = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(selectUser);

  return {
    currentUser,
    setCurrentUser: (user: User | null) => {
      dispatch(setCurrentUser(user));
    },
  };
};

export default useUser;
