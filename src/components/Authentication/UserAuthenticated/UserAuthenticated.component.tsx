import Loader from "@components/Loaders/loader/Loader.component";
import { useUser } from "@/contexts/User.context";
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
