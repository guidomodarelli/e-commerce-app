import CartProvider from "@global/contexts/Cart.context";
import { ProductsProvider } from "@global/contexts/Categories.context";
import HeaderNavProvider from "@global/contexts/HeaderNav.context";
import { UserProvider } from "@global/contexts/User.context";
import { PropsWithChildren } from "react";

interface ProvidersProps extends PropsWithChildren {}

function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <ProductsProvider>
        <HeaderNavProvider>
          <CartProvider>{children}</CartProvider>
        </HeaderNavProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default Providers;
