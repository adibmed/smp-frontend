import ProductRepository from "./ProductRepository";
import AuthRepository from "./AuthRepository";

export default ($axios) => ({
  product: ProductRepository($axios),
  auth: AuthRepository($axios),
});
