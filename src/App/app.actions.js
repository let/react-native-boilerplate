import { LOAD_USER, LOADED_USER } from "./app.types";

export function loadUser() {
  return {
    type: LOAD_USER
  };
}

export function loadedUser(value) {
  return {
    type: LOADED_USER,
    value
  };
}
