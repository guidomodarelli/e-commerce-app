import Header from "@components/Header/Header.component";
import Home from "./pages/Home.page";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn.page";
import ShopPage from "./pages/Shop.page";
import SignUp from "./pages/SignUp.page";
import Page404 from "./pages/404.page";
import CheckoutPage from "./pages/Checkout.page";
import { useEffectOnce } from "react-use";
import { onAuthStateChanged } from "./setup";
import useUser from "./hooks/useUser.hook";

function App() {
  const { setCurrentUser } = useUser();

  useEffectOnce(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  });

  return (
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
  );
}

export default App;
