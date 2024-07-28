import { useUserSelector } from "@store/user";
import NavItem from "./NavItem.component";
import Loader from "@components/Loaders/loader/Loader.component";
import { toast } from "sonner";
import { signOut } from "@/setup";

interface NavItemUserSignInProps {}

const NavItemUserSignIn = ({}: NavItemUserSignInProps) => {
  const { currentUser } = useUserSelector();

  const signOutHandler = async () => {
    toast.success("You are logged out successfully!");
    await signOut();
  };

  if (currentUser === undefined) {
    return (
      <NavItem to="/signIn">
        <Loader />
      </NavItem>
    );
  } else if (currentUser === null) {
    return <NavItem to="/signIn">SIGN IN</NavItem>;
  }

  return <NavItem onClick={signOutHandler}>SIGN OUT</NavItem>;
};

export default NavItemUserSignIn;
