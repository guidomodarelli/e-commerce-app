import { UserContext } from "@/contexts/User.context";
import { useContext } from "react";

function useUser() {
  return useContext(UserContext);
}

export default useUser;
