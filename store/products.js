import { SET_PRODUCTS } from "./mutations.type"
import { GET_PRODUCTS } from "./actions.type"
import { SET_LOADING_PRODUCTS } from "./mutations.type"
import { GET_APPROVED_PRODUCTS } from "./actions.type"
import { SET_APPROVED_PRODUCTS } from "./mutations.type"
import { CREATE_PRODUCT } from "./actions.type"

export const state = () => ({
    products: [],
    approvedProducts: [],
    isLoading: false,
})

export const mutations = {
    [SET_PRODUCTS](state, products) {
        state.products = products
    },

    [SET_LOADING_PRODUCTS](state, isLoading) {
        state.isLoading = isLoading
    },
    
    [SET_APPROVED_PRODUCTS](state, approvedProducts) {
        state.approvedProducts = approvedProducts
    }

}

export const actions = {
    async [GET_PRODUCTS]({ commit }) {
        commit(SET_LOADING_PRODUCTS, true)
        const res = await this.$api.product.all()
        const {status, data} = res;
        if(status === 200) {
            commit(SET_PRODUCTS, data)
        } else {
            // Handle error here
            console.log('Failed to get products')
        }
        commit(SET_LOADING_PRODUCTS, false)
    },

    async [GET_APPROVED_PRODUCTS]({ commit }) {
        commit(SET_LOADING_PRODUCTS, true)
        const res = await this.$api.product.approved()
        const {status, data} = res;
        if(status === 200) {
            commit(SET_APPROVED_PRODUCTS, data)
        } else {
            // Handle error here
            console.log('Failed to get approved products')
        }
        commit(SET_LOADING_PRODUCTS, false)
    },

    async [CREATE_PRODUCT]({ commit }, product) {
        const res = await this.$api.product.create(product);
        const {status, data} = res;
        if(status === 200) {
            console.log('Product created successfully')
        } else {
            // Handle error here
            console.log('Failed to create product')
        }
    }
}

export const getters = {}