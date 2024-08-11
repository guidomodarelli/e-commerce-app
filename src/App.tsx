import Header from "@components/Header/Header.component";
import { Routes, Route } from "react-router-dom";
import { useEffectOnce } from "react-use";
import { checkUserSession } from "@store/user";
import { useAppDispatch } from "@store/store";
import { lazy, Suspense } from "react";
import Spinner from "@components/spinner/Spinner.component";

const Home = lazy(() => import("./pages/Home.page"));
const SignIn = lazy(() => import("./pages/SignIn.page"));
const ShopPage = lazy(() => import("./pages/Shop.page"));
const SignUp = lazy(() => import("./pages/SignUp.page"));
const Page404 = lazy(() => import("./pages/404.page"));
const CheckoutPage = lazy(() => import("./pages/Checkout.page"));

function App() {
  const dispatch = useAppDispatch();

  useEffectOnce(() => {
    dispatch(checkUserSession());
  });

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
