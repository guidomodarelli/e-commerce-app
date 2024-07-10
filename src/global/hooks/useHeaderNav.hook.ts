import { HeaderNavContext } from "@global/contexts/HeaderNav.context";
import { useContext } from "react";

function useHeaderNav() {
  return useContext(HeaderNavContext);
}

export default useHeaderNav;
