import CartDropdown from "@/components/cart-dropdown/CartDropdown.component";
import CartIcon from "@/components/icons/cart/CartIcon.component";
import { cn } from "@/utils/cn";
import Logo from "@assets/Logo.tsx";
import { MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useHeaderNav } from "@/contexts/HeaderNav.context";
import NavItem from "./NavItem.component";
import NavItemUserSignIn from "./NavItemUserSignIn.component";
import NavItemsContainer from "./NavItemsContainer.component";
import { UUID } from "@core/Contexts/Shared/Domain/ValueObject/UUID";

interface NavigationProps {}

function Navigation({}: NavigationProps) {
  const { isHeaderNavOpen, closeHeaderNav, openHeaderNav } = useHeaderNav();

  const navItems = [
    <NavItem key={UUID.random().value} to="/shop">
      SHOP
    </NavItem>,
    <NavItemUserSignIn key={UUID.random().value} />,
    <NavItem key={UUID.random().value}>
      <CartIcon />
    </NavItem>,
  ];

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-[--px] h-[--nav-height]">
      <Link className={styles["logo-container"]} to={"/"}>
        <Logo />
      </Link>
      <nav className={cn(styles.navigation, { flex: isHeaderNavOpen })}>
        <NavItemsContainer items={navItems} />
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
