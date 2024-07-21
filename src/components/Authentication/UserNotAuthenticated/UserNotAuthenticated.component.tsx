import Loader from "@/components/Loaders/loader/Loader.component";
import { useUser } from "@global/contexts/User.context";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface UserNotAuthenticatedProps extends PropsWithChildren {}

function UserNotAuthenticated({ children }: UserNotAuthenticatedProps) {
  const { currentUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
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
