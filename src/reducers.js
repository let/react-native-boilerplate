import { combineReducers } from "redux";
import { navReducer } from "./navigations";

import appReducer from "./App/app.reducer";
import homePageReducer from "./containers/homepage/homepage.reducer";

export default function getRootReducer() {
  return combineReducers({
    nav: navReducer,
    app: appReducer,
    homepage: homePageReducer
  });
}
