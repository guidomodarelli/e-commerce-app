import Header from "./components/Header/Header.component";
import Home from "./pages/Home.page";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn.page";
import Shop from "./pages/Shop.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
