import { takeLatest, put } from "redux-saga/effects";
import { LOAD_DATA } from "./homepage.types";
import { loadedData } from "./homepage.actions";

import ApiStore from "../../utils/request";

export const loadDataSaga = function*(action) {
  try {
    const response = yield ApiStore.additionalProducts.get(`/${action.value}`);
    yield put(loadedData(response.data));
  } catch (e) {}
};

const homepageSaga = function* homepageSaga() {
  yield takeLatest(LOAD_DATA, loadDataSaga);
};

export default homepageSaga;
