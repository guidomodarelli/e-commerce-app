import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

function Layout({ children }: LayoutProps) {
  return <main className="mx-auto sm:max-w-96">{children}</main>;
}

export default Layout;
