import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation.component";
import styles from "./Header.module.css";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-16">
          <Navigation />
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
