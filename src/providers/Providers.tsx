import CartProvider from "@/contexts/Cart.context";
import HeaderNavProvider from "@/contexts/HeaderNav.context";
import { ProductsProvider } from "@/contexts/Products.context";
import { UserProvider } from "@/contexts/User.context";
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
