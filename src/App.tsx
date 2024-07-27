import Header from "@components/Header/Header.component";
import Home from "./pages/Home.page";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn.page";
import ShopPage from "./pages/Shop.page";
import SignUp from "./pages/SignUp.page";
import Page404 from "./pages/404.page";
import CheckoutPage from "./pages/Checkout.page";
import { useDispatch } from "react-redux";
import { UserAction } from "@store/user";
import { useEffectOnce } from "react-use";
import { onAuthStateChanged } from "./setup";
import { UserFactoryFirebaseAdapter } from "@core/adapters";

function App() {
  const dispatch = useDispatch();
  const userAction = UserAction(dispatch);

  useEffectOnce(() => {
    const unsubscribe = onAuthStateChanged((userFirebase) => {
      let user = null;
      if (userFirebase) {
        user = UserFactoryFirebaseAdapter.create(userFirebase);
      }
      userAction.setCurrentUser(user);
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
