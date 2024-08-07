import { getCategories } from "@/setup";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchCategoriesFailure, fetchCategoriesSuccess } from ".";
import { Category } from "@core/domain/entities";
import { FETCH_CATEGORIES_START } from "./categories.types";

export function* fetchCategories() {
  try {
    const categories = (yield call(getCategories)) as Category[];
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure(error as Error));
  }
}
export function* onFetchCategories() {
  yield takeLatest(FETCH_CATEGORIES_START, fetchCategories);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
