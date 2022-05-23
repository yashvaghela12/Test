import { call, put, takeEvery } from "redux-saga/effects";
import fetchCards from "../Reducer/Api_Pagination";

function* handleCard() {
  try {
    const product = yield call(fetchCards);
    yield put({ type: "FETCH_DATA", data: product });
  } catch (err) {
    yield put({ type: "FETCH_ERROR", message: err.message });
  }
}

function* watcherSaga() {
  yield takeEvery("GET_PRODUCT", handleCard);
}

