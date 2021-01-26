import HttpService from "./HttpService";
import { apiUrl } from "../config/config.json";

const apiEndPoint = apiUrl + "/products";

// private function
function setProductUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function createProduct(product) {
  return HttpService.post(apiEndPoint, product);
}
export function getProducts() {
  return HttpService.get(apiEndPoint);
}
export function getProduct(productId) {
  return HttpService.get(setProductUrl(productId));
}
export function deleteProduct(productId) {
  return HttpService.delete(setProductUrl(productId));
}
export function updateProduct(product) {
  return HttpService.put(apiEndPoint, product);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct,
};
