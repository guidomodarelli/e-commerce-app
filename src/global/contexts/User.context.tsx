import { onAuthStateChanged } from "@/setup";
import { User } from "firebase/auth";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
  currentUser?: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null | undefined>>;
}

export const UserContext = createContext<UserContextType>({
  currentUser: undefined,
  setCurrentUser: () => undefined,
});

export function useUser() {
  return useContext(UserContext);
}

interface UserProviderProps extends PropsWithChildren {}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
