import HttpService from "./HttpService";
import { apiUrl } from "../config/config.json";

const apiEndPoint = apiUrl + "/products";

export function getSettings() {
  return HttpService.get(apiEndPoint);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSettings,
};
