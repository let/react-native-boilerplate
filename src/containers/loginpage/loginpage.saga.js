import { takeLatest, put } from "redux-saga/effects";
import { LOG_IN } from "./loginpage.types";
import ApiStore from "../../utils/request";

export const loginSaga = function*({ value, resolve, reject }) {
  try {
    const response = yield ApiStore.additionalProducts.get(`/${action.value}`);
    resolve("resolve");
  } catch (e) {
    reject("reject");
  }
};

const loginPageSaga = function* loginPageSaga() {
  yield takeLatest(LOG_IN, loginSaga);
};

export default loginPageSaga;
