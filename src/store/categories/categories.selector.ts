import { useSelector } from "react-redux";
import { AppRootState } from "../store";
import { CategoryState } from "./categories.state";
import { Category } from "@core/domain/entities";

export const useCategorySelector = () => useSelector<AppRootState, CategoryState>((state) => state.categories);

export const getCategoryByTitleSelector = (list: Category[], categoryTitle: Category["title"]) => {
  return list.find((category) => category.title === categoryTitle);
};

export const getCategoryIdSelector = (list: Category[], categoryTitle: Category["title"]) => {
  return getCategoryByTitleSelector(list, categoryTitle)?.id;
};
