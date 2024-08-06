import { CSSProperties } from "react";
import styles from "./Spinner.module.css";

interface SpinnerProps {
  size?: number;
}

function Spinner({ size = 30 }: SpinnerProps) {
  const style = {
    "--size": `${size.toString()}px`,
  } as CSSProperties;

  return (
    <div className={styles.SpinnerOverlay} style={style}>
      <div className={styles.SpinnerContainer}></div>
    </div>
  );
}

export default Spinner;
