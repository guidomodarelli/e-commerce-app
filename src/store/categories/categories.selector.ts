import { AppRootState } from "../store";
import { createSelector } from "reselect";
import { selectProductsList } from "@store/products";
import { Product } from "@core/Contexts/Shop/Product/Domain";

export const selectCategories = (state: AppRootState) => state.categories;

export const selectCategoriesList = createSelector([selectCategories], ({ categories }) => categories);

export const selectCategoriesMap = createSelector([selectCategoriesList, selectProductsList], (categories, products) =>
  categories.reduce<Record<string, Product[] | undefined>>((previousValue, currentCategory) => {
    const { id, title } = currentCategory;
    previousValue[title.toLowerCase()] = products.filter((product) => product.categoryId === id);
    return previousValue;
  }, {}),
);
