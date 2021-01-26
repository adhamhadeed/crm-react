import HttpService from "./HttpService";
import { apiUrl } from "../config/config.json";

const apiEndPoint = "https://api.imgflip.com/get_memes";
export function getOrders() {
  return HttpService.get(apiEndPoint);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getOrders,
};
