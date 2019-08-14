import { call, all } from "redux-saga/effects";

import homepageSaga from "./containers/homepage/homepage.saga";

const rootSaga = function* rootSaga() {
  yield all([call(homepageSaga)]);
};

export default rootSaga;
