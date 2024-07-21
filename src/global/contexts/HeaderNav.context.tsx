import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

interface HeaderNavType {
  isHeaderNavOpen: boolean;
  setIsHeaderNavOpen: Dispatch<SetStateAction<boolean>>;
  openHeaderNav: () => void;
  closeHeaderNav: () => void;
}

export const HeaderNavContext = createContext<HeaderNavType>({
  isHeaderNavOpen: false,
  setIsHeaderNavOpen: () => false,
  openHeaderNav: () => {},
  closeHeaderNav: () => {},
});

export function useHeaderNav() {
  return useContext(HeaderNavContext);
}

interface HeaderNavProviderProps extends PropsWithChildren {}

function HeaderNavProvider({ children }: HeaderNavProviderProps) {
  const [isHeaderNavOpen, setIsHeaderNavOpen] = useState<boolean>(false);

  const value: HeaderNavType = {
    isHeaderNavOpen,
    openHeaderNav() {
      setIsHeaderNavOpen(true);
    },
    closeHeaderNav() {
      setIsHeaderNavOpen(false);
    },
    setIsHeaderNavOpen,
  };

  return <HeaderNavContext.Provider value={value}>{children}</HeaderNavContext.Provider>;
}

export default HeaderNavProvider;
