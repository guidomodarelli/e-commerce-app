import CartProvider from "@/contexts/Cart.context";
import { ProductsProvider } from "@/contexts/Products.context";
import HeaderNavProvider from "@/contexts/HeaderNav.context";
import { UserProvider } from "@/contexts/User.context";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface ProvidersProps extends PropsWithChildren {}

function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ProductsProvider>
          <HeaderNavProvider>
            <CartProvider>{children}</CartProvider>
          </HeaderNavProvider>
        </ProductsProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default Providers;
