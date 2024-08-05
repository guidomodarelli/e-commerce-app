import { selectUser, UserAction } from "@store/user";
import { useDispatch, useSelector } from "react-redux";

const useUser = () => {
  const dispatch = useDispatch();
  const userAction = UserAction(dispatch);
  const { currentUser } = useSelector(selectUser);

  return {
    currentUser,
    ...userAction,
  };
};

export default useUser;
