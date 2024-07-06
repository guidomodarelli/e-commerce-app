import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation.component";
import styles from "./Header.module.css";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}

export default Header;
