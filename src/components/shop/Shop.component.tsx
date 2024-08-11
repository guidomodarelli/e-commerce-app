import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "@components/spinner/Spinner.component";

const CategoriesPreview = lazy(() => import("../Categories/CategoriesPreview/CategoriesPreview.component"));
const Category = lazy(() => import("@/pages/Category.page"));

interface ShopProps {}

function Shop({}: ShopProps) {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":categoryTitle" element={<Category />} />
      </Routes>
    </Suspense>
  );
}

export default Shop;
