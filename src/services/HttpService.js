import axios from "axios";
import Logger from "../logger/Logger";
import { toast } from "react-toastify";
// generic - handle unexpected error globaly
axios.interceptors.response.use(null, (error) => {
  const expetcedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expetcedError) {
    // TODO: log the error
    Logger.log(error);
    toast.error("un Expected error occurred!");
  }
  return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};
