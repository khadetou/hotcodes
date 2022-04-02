import axios from "axios";
export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    console.log(axios.defaults.headers.common);
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
