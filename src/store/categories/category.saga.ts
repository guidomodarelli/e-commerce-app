import { getCategories } from "@/setup";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchCategoriesFailure, fetchCategoriesStart, fetchCategoriesSuccess } from ".";
import { Category } from "@core/category/Domain";

export function* fetchCategories() {
  try {
    const categories = (yield call(getCategories)) as Category[];
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure(error as Error));
  }
}
export function* onFetchCategories() {
  yield takeLatest(fetchCategoriesStart, fetchCategories);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
