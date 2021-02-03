import HttpService from "./HttpService";
import { apiUrl } from "../config/config.json";

const apiEndPoint = apiUrl + "/users";

export function getUsers() {
  return HttpService.get(apiEndPoint);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers,
};
