import { getCategories } from "@/setup";
import { all, call, put, takeLatest } from "typed-redux-saga/macro";
import { fetchCategoriesFailure, fetchCategoriesStart, fetchCategoriesSuccess } from "./categories.slice";

export function* fetchCategories() {
  try {
    const categories = yield* call(getCategories);
    yield* put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield* put(fetchCategoriesFailure(error as Error));
  }
}
export function* onFetchCategories() {
  yield* takeLatest(fetchCategoriesStart, fetchCategories);
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
