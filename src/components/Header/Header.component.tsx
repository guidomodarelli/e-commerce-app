import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation.component";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}

export default Header;
