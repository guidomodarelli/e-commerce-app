import { CSSProperties } from "react";
import "./LsdRing.styles.css";

interface LdsRingProps {
  size?: number;
}

function LdsRing({ size = 30 }: LdsRingProps) {
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

export default LdsRing;
