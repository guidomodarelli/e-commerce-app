import { PropsWithChildren } from "react";

interface FormErrorProps extends PropsWithChildren {}

function FormError({ children }: FormErrorProps) {
  return <p className="text-red-500 text-sm">{children}</p>;
}

export default FormError;
