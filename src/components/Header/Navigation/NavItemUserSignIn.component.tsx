import useUser from "@/hooks/useUser.hook";
import Spinner from "@components/spinner/Spinner.component";
import { useAppDispatch } from "@store/store";
import { signOutStart } from "@store/user";
import NavItem from "./NavItem.component";

interface NavItemUserSignInProps {}

const NavItemUserSignIn = ({}: NavItemUserSignInProps) => {
  const dispatch = useAppDispatch();
  const { currentUser } = useUser();

  const signOutHandler = () => {
    dispatch(signOutStart());
  };

  if (currentUser === undefined) {
    return (
      <NavItem to="/signIn">
        <Spinner />
      </NavItem>
    );
  } else if (currentUser === null) {
    return <NavItem to="/signIn">SIGN IN</NavItem>;
  }

  return <NavItem onClick={signOutHandler}>SIGN OUT</NavItem>;
};

export default NavItemUserSignIn;
