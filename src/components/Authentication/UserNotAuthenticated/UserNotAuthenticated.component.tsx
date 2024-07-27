import Loader from "@/components/Loaders/loader/Loader.component";
import { useUserSelector } from "@store/user";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useEffectOnce } from "react-use";

interface UserNotAuthenticatedProps extends PropsWithChildren {}

function UserNotAuthenticated({ children }: UserNotAuthenticatedProps) {
  const { currentUser } = useUserSelector();
  const navigate = useNavigate();

  useEffectOnce(() => {
    if (currentUser) {
      navigate("/", { replace: true });
    }
  });

  if (currentUser === undefined) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  return children;
}

export default UserNotAuthenticated;
