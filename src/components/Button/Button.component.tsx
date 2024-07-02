import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./Button.styles.css";
import LdsRing from "../Loaders/lds-ring/LsdRing.component";

const BUTTON_VARIANT = {
  google: "google-sign-in",
  inverted: "inverted",
};

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof BUTTON_VARIANT;
  loading?: boolean;
}

function Button({ children, variant, loading = false, disabled = false, ...otherProps }: ButtonProps) {
  return (
    <button
      className={cn("button-container", variant ? BUTTON_VARIANT[variant] : "")}
      disabled={disabled || loading}
      {...otherProps}
    >
      {loading ? <LdsRing /> : children}
    </button>
  );
}

export default Button;
