import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./categories.state";
import { Category } from "@core/domain/entities";
import { Payload } from "@store/utils/payload.utils";

export const categorySlice = createSlice({
  name: "category",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesStart(draft) {
      draft.isLoading = true;
    },

    fetchCategoriesSuccess(draft, action: Payload<Category[]>) {
      draft.isLoading = false;
      draft.isFetched = true;
      draft.categories = action.payload;
    },

    fetchCategoriesFailure(draft, action: Payload<Error>) {
      draft.isLoading = false;
      draft.isFetched = true;
      draft.error = action.payload;
    },
  },
});

export const { fetchCategoriesFailure, fetchCategoriesStart, fetchCategoriesSuccess } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
