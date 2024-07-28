import CartDropdown from "@/components/cart-dropdown/CartDropdown.component";
import CartIcon from "@/components/icons/cart/CartIcon.component";
import { cn } from "@/utils/cn";
import Logo from "@assets/Logo.tsx";
import { Loader, MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { signOut } from "@/setup";
import { useHeaderNav } from "@/contexts/HeaderNav.context";
import { useUserSelector } from "@store/user";
import { toast } from "sonner";

interface NavigationProps {}

function Navigation({}: NavigationProps) {
  const { currentUser } = useUserSelector();
  const { isHeaderNavOpen, closeHeaderNav, openHeaderNav } = useHeaderNav();

  const signOutHandler = async () => {
    toast.success("You are logged out successfully!");
    await signOut();
  };

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-[--px] h-[--nav-height]">
      <Link className={styles["logo-container"]} to={"/"}>
        <Logo />
      </Link>
      <nav className={cn(styles.navigation, { flex: isHeaderNavOpen })}>
        <ul className={styles["nav-links-container"]}>
          <li>
            <Link onClick={closeHeaderNav} className={styles["nav-link"]} to={"/shop"}>
              SHOP
            </Link>
          </li>
          <li>
            {currentUser === undefined ? (
              <div className={styles["nav-link"]}>
                <Loader />
              </div>
            ) : currentUser === null ? (
              <Link onClick={closeHeaderNav} className={styles["nav-link"]} to={"/signIn"}>
                SIGN IN
              </Link>
            ) : (
              <span className={styles["nav-link"]} onClick={signOutHandler}>
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
