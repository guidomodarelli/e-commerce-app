import HeaderNavProvider from "@/contexts/HeaderNav.context";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

interface ProvidersProps extends PropsWithChildren {}

function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <HeaderNavProvider>{children}</HeaderNavProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default Providers;
