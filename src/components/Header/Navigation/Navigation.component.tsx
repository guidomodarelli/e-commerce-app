import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Logo from "../../../assets/Logo.tsx";

interface NavigationProps {}

function Navigation({}: NavigationProps) {
  return (
    <nav className={styles.navigation}>
      <Link className={styles["logo-container"]} to={"/"}>
        <Logo />
      </Link>
      <ul className={styles["nav-links-container"]}>
        <li>
          <Link className={styles["nav-link"]} to={"/shop"}>
            SHOP
          </Link>
        </li>
        <li>
          <Link className={styles["nav-link"]} to={"/signIn"}>
            SIGN IN
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
