import {
  SET_PRODUCTS,
  SET_PREVIEW_PRODUCT,
  SET_LOADING_PRODUCTS,
  SET_APPROVED_PRODUCTS,
} from "./mutations.type";
import {
  GET_PRODUCTS,
  GET_APPROVED_PRODUCTS,
  CREATE_PRODUCT,
  GET_PREVIEW_PRODUCT,
  UPDATE_PRODUCT,
} from "./actions.type";

export const state = () => ({
  products: [],
  approvedProducts: [],
  isLoading: false,
  previewProduct: null,
});

export const mutations = {
  [SET_PRODUCTS](state, products) {
    state.products = products;
  },

  [SET_LOADING_PRODUCTS](state, isLoading) {
    state.isLoading = isLoading;
  },

  [SET_APPROVED_PRODUCTS](state, approvedProducts) {
    state.approvedProducts = approvedProducts;
  },
  [SET_PREVIEW_PRODUCT](state, previewProduct) {
    state.previewProduct = previewProduct;
  },
};

export const actions = {
  async [GET_PRODUCTS]({ commit }) {
    commit(SET_LOADING_PRODUCTS, true);
    const res = await this.$api.product.all();
    const { status, data } = res;
    if (status === 200) {
      commit(SET_PRODUCTS, data);
    } else {
      // Handle error here
      console.log("Failed to get products");
    }
    commit(SET_LOADING_PRODUCTS, false);
  },

  async [GET_APPROVED_PRODUCTS]({ commit }) {
    commit(SET_LOADING_PRODUCTS, true);
    const res = await this.$api.product.approved();
    const { status, data } = res;
    if (status === 200) {
      commit(SET_APPROVED_PRODUCTS, data);
    } else {
      // Handle error here
      console.log("Failed to get approved products");
    }
    commit(SET_LOADING_PRODUCTS, false);
  },

  async [CREATE_PRODUCT]({ commit }, product) {
    const res = await this.$api.product.create(product);
    const { status, data } = res;
    if (status === 200) {
      console.log("Product created successfully");
    } else {
      // Handle error here
      console.log("Failed to create product");
    }
  },

  async [GET_PREVIEW_PRODUCT]({ commit }, productId) {
    commit(SET_LOADING_PRODUCTS, true);
    const res = await this.$api.product.show(productId);
    const { status, data } = res;
    if (status === 200) {
      commit(SET_PREVIEW_PRODUCT, data);
    } else {
      // Handle error here
      console.log("Failed to get product");
    }
    commit(SET_LOADING_PRODUCTS, false);
  },

  async [UPDATE_PRODUCT]({ commit }, product) {
    const res = await this.$api.product.update(product);
    const { status, data } = res;
    if (status === 200) {
      console.log("Product updated successfully");
    } else {
      // Handle error here
      console.log("Failed to update product");
    }
  },
};

export const getters = {};
