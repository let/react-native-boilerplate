import { LOAD_DATA, LOADED_DATA } from "./homepage.types";

export function loadData() {
  return {
    type: LOAD_DATA
  };
}

export function loadedData(value) {
  return {
    type: LOADED_DATA,
    value
  };
}
