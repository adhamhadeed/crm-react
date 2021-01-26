import HttpService from "./HttpService";
import { apiUrl } from "../config/config.json";

const apiEndPoint = apiUrl + "/users";

// private function
function setUserUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function createUser(user) {
  return HttpService.post(apiEndPoint, user);
}
export function getUsers() {
  return HttpService.get(apiEndPoint);
}
export function getUser(userId) {
  return HttpService.get(setUserUrl(userId));
}
export function deleteUser(userId) {
  return HttpService.delete(setUserUrl(userId));
}
export function updateUser(user) {
  return HttpService.put(apiEndPoint, user);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
};
