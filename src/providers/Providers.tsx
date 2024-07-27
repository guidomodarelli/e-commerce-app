import CartProvider from "@/contexts/CartContext";
import { ProductsProvider } from "@/contexts/Products.context";
import HeaderNavProvider from "@/contexts/HeaderNav.context";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const queryClient = new QueryClient();

interface ProvidersProps extends PropsWithChildren {}

function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>
          <HeaderNavProvider>
            <CartProvider>{children}</CartProvider>
          </HeaderNavProvider>
        </ProductsProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default Providers;
