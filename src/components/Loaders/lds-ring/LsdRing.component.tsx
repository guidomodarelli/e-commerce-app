import { CSSProperties } from "react";
import "./LsdRing.styles.css";

interface LoaderProps {
  size?: number;
}

function Loader({ size = 30 }: LoaderProps) {
  const style = {
    "--size": `${size.toString()}px`,
  } as CSSProperties;

  return (
    <div className="lds-ring" style={style}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
