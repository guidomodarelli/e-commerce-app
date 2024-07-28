import { useSelector } from "react-redux";
import { AppRootState } from "../store";
import { CategoryState } from "./categories.state";

export const useCategorySelector = () => useSelector<AppRootState, CategoryState>((state) => state.categories);
