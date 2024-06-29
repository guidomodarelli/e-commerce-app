import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./Button.styles.css";

const BUTTON_VARIANT = {
  google: "google-sign-in",
  inverted: "inverted",
};

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof BUTTON_VARIANT;
}

function Button({ children, variant, ...otherProps }: ButtonProps) {
  return (
    <button className={cn("button-container", variant && BUTTON_VARIANT[variant])} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
