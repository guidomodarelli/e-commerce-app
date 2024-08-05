import { selectUser } from "@store/user";
import { useSelector } from "react-redux";

const useUser = () => {
  const { currentUser } = useSelector(selectUser);

  return {
    currentUser,
  };
};

export default useUser;
