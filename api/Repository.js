import ProductRepository from './ProductRepository';

export default ($axios) => ({
    product: ProductRepository($axios)
});