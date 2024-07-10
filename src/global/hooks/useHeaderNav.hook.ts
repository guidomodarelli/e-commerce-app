import { HeaderNavContext } from "@/contexts/HeaderNav.context";
import { useContext } from "react";

function useHeaderNav() {
  return useContext(HeaderNavContext);
}

export default useHeaderNav;
