import { call, put, takeEvery } from "@redux-saga/core/effects";

function* workGetPostsFetch() {}

function* postSaga() {
  yield takeEvery("posts/getPostsFetch", workGetPostsFetch);
}

export default postSaga;
