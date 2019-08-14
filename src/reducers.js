import { combineReducers } from "redux";
import { navReducer } from "./navigations";

import homePageReducer from "./containers/homepage/homepage.reducer";

export default function getRootReducer() {
  return combineReducers({
    nav: navReducer,
    homepage: homePageReducer
  });
}
