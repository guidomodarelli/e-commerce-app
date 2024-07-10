import Loader from "@/components/Loaders/lds-ring/LsdRing.component";
import useUser from "@global/hooks/useUser.hook";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface UserAuthenticatedProps extends PropsWithChildren {}

function UserAuthenticated({ children }: UserAuthenticatedProps) {
  const { currentUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  });

  if (currentUser) {
    return children;
  }

  return <Loader />;
}

export default UserAuthenticated;
