import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

function Layout({ children }: LayoutProps) {
  return <main className="mx-auto sm:max-w-screen-xl pb-16 pt-8 px-[--px]">{children}</main>;
}

export default Layout;
