import { LOG_IN, LOG_OUT } from "./loginpage.types";

export function login() {
  return {
    type: LOG_IN
  };
}

export function logout() {
  return {
    type: LOG_OUT
  };
}
