import Loader from "@components/Loaders/loader/Loader.component";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useEffectOnce } from "react-use";
import useUser from "@/hooks/useUser.hook";

interface UserAuthenticatedProps extends PropsWithChildren {}

function UserAuthenticated({ children }: UserAuthenticatedProps) {
  const { currentUser } = useUser();
  const navigate = useNavigate();

  useEffectOnce(() => {
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
