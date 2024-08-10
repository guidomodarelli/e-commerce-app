import { useAppSelector } from "@store/store";
import { selectUser } from "@store/user";

const useUser = () => {
  const { currentUser } = useAppSelector(selectUser);

  return {
    currentUser,
  };
};

export default useUser;
