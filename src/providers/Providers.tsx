import CartProvider from "@/contexts/Cart.context";
import HeaderNavProvider from "@/contexts/HeaderNav.context";
import { CategoriesProvider } from "@/contexts/Categories.context";
import { UserProvider } from "@/contexts/User.context";
import { PropsWithChildren } from "react";

interface ProvidersProps extends PropsWithChildren {}

function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <CategoriesProvider>
        <HeaderNavProvider>
          <CartProvider>{children}</CartProvider>
        </HeaderNavProvider>
      </CategoriesProvider>
    </UserProvider>
  );
}

export default Providers;
