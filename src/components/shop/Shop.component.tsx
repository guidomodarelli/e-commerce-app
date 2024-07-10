import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories/CategoriesPreview/CategoriesPreview.component";
import "./shop.styles.css";

interface ShopProps {}

function Shop({}: ShopProps) {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
}

export default Shop;
