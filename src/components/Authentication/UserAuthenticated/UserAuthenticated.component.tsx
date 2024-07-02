import LdsRing from "@/components/Loaders/lds-ring/LsdRing.component";
import { UserContext } from "@/contexts/User.context";
import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface UserAuthenticatedProps extends PropsWithChildren {}

function UserAuthenticated({ children }: UserAuthenticatedProps) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  });

  if (currentUser) {
    return children;
  }

  return <LdsRing />;
}

export default UserAuthenticated;
