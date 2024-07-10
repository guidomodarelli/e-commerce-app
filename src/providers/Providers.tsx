import CartProvider from "@global/contexts/Cart.context";
import { CategoriesProvider } from "@global/contexts/Categories.context";
import HeaderNavProvider from "@global/contexts/HeaderNav.context";
import { UserProvider } from "@global/contexts/User.context";
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
