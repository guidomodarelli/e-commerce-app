import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Logo from "@assets/Logo.tsx";
import { useContext } from "react";
import { UserContext } from "@/contexts/User.context";
import { signOutUser } from "@/utils/firebase/firebase.utils";

interface NavigationProps {}

function Navigation({}: NavigationProps) {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className={styles["nav-link"]} onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className={styles["nav-link"]} to={"/signIn"}>
              SIGN IN
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
