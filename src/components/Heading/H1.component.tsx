import { PropsWithChildren, HTMLAttributes } from "react";

interface H1Props extends PropsWithChildren, HTMLAttributes<HTMLElement> {}

function H1({ children }: H1Props) {
  return <h1 className="text-4xl mb-8 select-none">{children}</h1>;
}

export default H1;
