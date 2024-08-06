import Loader from "@components/spinner/Spinner.component";
import useUser from "@/hooks/useUser.hook";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useEffectOnce } from "react-use";

interface UserNotAuthenticatedProps extends PropsWithChildren {}

function UserNotAuthenticated({ children }: UserNotAuthenticatedProps) {
  const { currentUser } = useUser();
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
