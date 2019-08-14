import axios from "axios";
import { API_URL } from "../environments/env.development";

const baseURL = API_URL;
const token = null;

var setTokenService = token => {
  axios.defaults.headers.common["Authorization"] = `${token}`;
};

var setNullTokenService = () => {
  axios.defaults.headers.common["Authorization"] = ``;
};

export var myInterceptorSuccess = function(response) {
  if (response.status == 200) {
    return response;
  }
};

export var myInterceptorError = function(err) {
  throw (error = {
    message: "ERROR_FROM_INTERCEPTOR"
  });
};

const createAxios = url =>
  axios.create({
    baseURL: `${baseURL}/${url}`,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    validateStatus: function(status) {
      return status == 200;
    }
  });
/*
var organisation = createAxios("Organisation");
organisation.interceptors.response.use(
  myInterceptorSuccess,
  myInterceptorError
);
*/

var ApiStore = {
  //organisation: organisation
};
export { setTokenService, setNullTokenService };
export default ApiStore;
