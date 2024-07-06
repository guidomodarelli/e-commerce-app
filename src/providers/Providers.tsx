import CartProvider from "@/contexts/Cart.context";
import { ProductsProvider } from "@/contexts/Products.context";
import { UserProvider } from "@/contexts/User.context";
import { PropsWithChildren } from "react";

interface ProvidersProps extends PropsWithChildren {}

function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default Providers;
