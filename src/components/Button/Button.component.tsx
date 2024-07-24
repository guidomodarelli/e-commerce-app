import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.css";
import Loader from "../Loaders/loader/Loader.component";

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
      className={cn(styles["button-container"], variant ? styles[BUTTON_VARIANT[variant]] : "")}
      disabled={disabled || loading}
      {...otherProps}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}

export default Button;
