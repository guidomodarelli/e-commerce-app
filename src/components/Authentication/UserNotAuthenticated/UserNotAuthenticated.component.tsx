import LdsRing from "@/components/Loaders/lds-ring/LsdRing.component";
import { UserContext } from "@/contexts/User.context";
import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface UserNotAuthenticatedProps extends PropsWithChildren {}

function UserNotAuthenticated({ children }: UserNotAuthenticatedProps) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/", { replace: true });
    }
  });

  if (currentUser === undefined) {
    return (
      <div className="flex justify-center">
        <LdsRing />
      </div>
    );
  }

  return children;
}

export default UserNotAuthenticated;
