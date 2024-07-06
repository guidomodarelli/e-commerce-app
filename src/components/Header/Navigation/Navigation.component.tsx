import { Link } from "react-router-dom";
import "./Navigation.styles.css";
import Logo from "@assets/Logo.tsx";
import { useContext, useState } from "react";
import { UserContext } from "@/contexts/User.context";
import { signOutUser } from "@/utils/firebase/firebase.utils";
import LdsRing from "@/components/Loaders/lds-ring/LsdRing.component";
import CartIcon from "@/components/icons/cart/CartIcon.component";
import CartDropdown from "@/components/cart-dropdown/CartDropdown.component";
import { XIcon, MenuIcon } from "lucide-react";
import { cn } from "@/utils/cn";

interface NavigationProps {}

function Navigation({}: NavigationProps) {
  const { currentUser } = useContext(UserContext);
  const [headerNavOpen, setHeaderNavOpen] = useState(false);

  const openHeaderNav = () => {
    setHeaderNavOpen(true);
  };

  const closeHeaderNav = () => {
    setHeaderNavOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-[--px] h-[--nav-height]">
      <Link className="logo-container" to={"/"}>
        <Logo />
      </Link>
      <nav className={cn("navigation", { flex: headerNavOpen })}>
        <ul className="nav-links-container">
          <li>
            <Link onClick={closeHeaderNav} className="nav-link" to={"/shop"}>
              SHOP
            </Link>
          </li>
          <li>
            {currentUser === undefined ? (
              <div className="nav-link">
                <LdsRing />
              </div>
            ) : currentUser === null ? (
              <Link onClick={closeHeaderNav} className="nav-link" to={"/signIn"}>
                SIGN IN
              </Link>
            ) : (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            )}
          </li>
          <li>
            <CartIcon />
          </li>
        </ul>
        <CartDropdown />
        <a className="md:hidden absolute top-6 right-6" onClick={closeHeaderNav}>
          <XIcon />
        </a>
      </nav>
      <a className="md:hidden p-4" onClick={openHeaderNav}>
        <MenuIcon />
      </a>
    </div>
  );
}

export default Navigation;
