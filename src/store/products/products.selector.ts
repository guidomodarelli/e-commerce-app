import { useSelector } from "react-redux";
import { AppRootState } from "../store";
import { ProductState } from "./products.state";
import { createSelector } from "reselect";

export const selectProducts = (state: AppRootState) => state.products;

export const useProductSelector = () => useSelector<AppRootState, ProductState>(selectProducts);

export const selectProductsList = createSelector([selectProducts], ({ list }) => list);
