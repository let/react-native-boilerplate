import { fromJS } from "immutable";
import { LOADED_USER } from "./app.types";

const initialState = fromJS({
  user: {}
});

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADED_USER:
      return state.set("user", action.value);
    default:
      return state;
  }
}
