import NavItem from "./NavItem.component";
import Loader from "@components/spinner/Spinner.component";
import { toast } from "sonner";
import { signOut } from "@/setup";
import useUser from "@/hooks/useUser.hook";

interface NavItemUserSignInProps {}

const NavItemUserSignIn = ({}: NavItemUserSignInProps) => {
  const { currentUser } = useUser();

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
