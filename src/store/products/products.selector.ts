import { useSelector } from "react-redux";
import { AppRootState } from "../store";
import { ProductState } from "./products.state";

export const useProductSelector = () => useSelector<AppRootState, ProductState>((state) => state.products);
