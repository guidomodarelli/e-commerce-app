import { AppRootState } from "../store";
import { createSelector } from "reselect";

export const selectProducts = (state: AppRootState) => state.products;

export const selectProductsList = createSelector([selectProducts], ({ list }) => list);
