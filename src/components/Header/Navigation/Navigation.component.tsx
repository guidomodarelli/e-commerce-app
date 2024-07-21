import CartDropdown from "@/components/cart-dropdown/CartDropdown.component";
import CartIcon from "@/components/icons/cart/CartIcon.component";
import useUser from "@global/hooks/useUser.hook";
import { cn } from "@/utils/cn";
import Logo from "@assets/Logo.tsx";
import { Loader, MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navigation.styles.css";
import { signOut } from "@/setup";
import { useHeaderNav } from "@global/contexts/HeaderNav.context";

interface NavigationProps {}

function Navigation({}: NavigationProps) {
  const { currentUser } = useUser();
  const { isHeaderNavOpen, closeHeaderNav, openHeaderNav } = useHeaderNav();

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-[--px] h-[--nav-height]">
      <Link className="logo-container" to={"/"}>
        <Logo />
      </Link>
      <nav className={cn("navigation", { flex: isHeaderNavOpen })}>
        <ul className="nav-links-container">
          <li>
            <Link onClick={closeHeaderNav} className="nav-link" to={"/shop"}>
              SHOP
            </Link>
          </li>
          <li>
            {currentUser === undefined ? (
              <div className="nav-link">
                <Loader />
              </div>
            ) : currentUser === null ? (
              <Link onClick={closeHeaderNav} className="nav-link" to={"/signIn"}>
                SIGN IN
              </Link>
            ) : (
              <span className="nav-link" onClick={signOut}>
                SIGN OUT
              </span>
            )}
          </li>
          <li>
            <CartIcon />
          </li>
        </ul>
        <CartDropdown />
        <a className="md:hidden absolute top-6 right-8 cursor-pointer" onClick={closeHeaderNav}>
          <XIcon />
        </a>
      </nav>
      <a className="md:hidden p-4 cursor-pointer" onClick={openHeaderNav}>
        <MenuIcon />
      </a>
    </div>
  );
}

export default Navigation;
