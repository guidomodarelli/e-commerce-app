import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

function Layout({ children }: LayoutProps) {
  return <main className="mx-auto sm:max-w-screen-xl pb-16">{children}</main>;
}

export default Layout;
