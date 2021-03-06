import axios from "axios";

const setJwt = (jwt) => {
  axios.defaults.headers.common["x-auth-token"] = jwt;
};
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.response.use(null, (err) => {
  const expectedError =
    err.response && err.response.status >= 400 && err.response.status < 500;
  if (!expectedError) {
    console.log("Logging unexpected expected error: ", err);
    alert("An unexpected error occurred.");
    throw err;
  }
  return Promise.reject(err);
});

const httpService = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  setJwt,
};
export default httpService;
