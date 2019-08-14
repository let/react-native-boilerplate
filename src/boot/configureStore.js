import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import logger from "redux-logger";
import getRootReducer from "../reducers";
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [sagaMiddleware];
  if (process.env.NODE_ENV == "development") {
    middlewares.push(logger);
  }

  const store = createStore(
    getRootReducer(),
    {},
    applyMiddleware(...middlewares)
  );
  sagaMiddleware.run(rootSaga);

  store.subscribe(() => {});

  return store;
}
