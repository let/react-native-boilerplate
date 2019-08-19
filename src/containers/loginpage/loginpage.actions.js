import { LOG_IN, LOG_OUT } from "./loginpage.types";

export function login(value, resolve, reject) {
  return {
    type: LOG_IN,
    value,
    resolve,
    reject
  };
}

export function logout() {
  return {
    type: LOG_OUT
  };
}
