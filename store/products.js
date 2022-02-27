import {
  SET_PRODUCTS,
  SET_PREVIEW_PRODUCT,
  SET_LOADING_PRODUCTS,
  SET_SUBMITTED_PRODUCTS,
} from "./mutations.type";
import {
  GET_PRODUCTS,
  GET_SUBMITTED_PRODUCTS,
  CREATE_PRODUCT,
  GET_PREVIEW_PRODUCT,
  UPDATE_PRODUCT,
  APPROVE_PRODUCT,
} from "./actions.type";

export const state = () => ({
  products: [],
  submittedProducts: [],
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

  [SET_SUBMITTED_PRODUCTS](state, submittedProducts) {
    state.submittedProducts = submittedProducts;
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

  async [GET_SUBMITTED_PRODUCTS]({ commit }) {
    commit(SET_LOADING_PRODUCTS, true);
    const res = await this.$api.product.submitted();
    const { status, data } = res;
    if (status === 200) {
      commit(SET_SUBMITTED_PRODUCTS, data);
    } else {
      // Handle error here
      console.log("Failed to get submitted products");
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
