import { PropsWithChildren, HTMLAttributes } from "react";

interface H1Props extends PropsWithChildren, HTMLAttributes<HTMLElement> {}

function H2({ children }: H1Props) {
  return <h2 className="text-3xl mb-4">{children}</h2>;
}

export default H2;
