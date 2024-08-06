import { CSSProperties } from "react";
import styles from "./Loader.module.css";

interface LoaderProps {
  size?: number;
}

function Loader({ size = 30 }: LoaderProps) {
  const style = {
    "--size": `${size.toString()}px`,
  } as CSSProperties;

  return (
    <div className={styles.SpinnerOverlay} style={style}>
      <div className={styles.SpinnerContainer}></div>
    </div>
  );
}

export default Loader;
