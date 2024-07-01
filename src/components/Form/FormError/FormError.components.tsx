import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

interface FormErrorProps extends PropsWithChildren {
  className?: string;
}

function FormError({ children, className }: FormErrorProps) {
  return <p className={cn("text-red-500 text-sm", className)}>{children}</p>;
}

export default FormError;
