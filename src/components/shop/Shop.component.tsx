import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories/CategoriesPreview/CategoriesPreview.component";
import Category from "@/pages/Category.page";

interface ShopProps {}

function Shop({}: ShopProps) {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categoryTitle" element={<Category />} />
    </Routes>
  );
}

export default Shop;
