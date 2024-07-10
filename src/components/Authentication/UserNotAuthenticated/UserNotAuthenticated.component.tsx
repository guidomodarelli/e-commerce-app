import Loader from "@/components/Loaders/lds-ring/LsdRing.component";
import useUser from "@global/hooks/useUser.hook";
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
