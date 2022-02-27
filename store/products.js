import { SET_PRODUCTS } from "./mutations.type"
import { GET_PRODUCTS } from "./actions.type"
import { SET_LOADING_PRODUCTS } from "./mutations.type"

export const state = () => ({
    products: [],
    isLoading: false,
})

export const mutations = {
    [SET_PRODUCTS](state, products) {
        state.products = products
    },
    [SET_LOADING_PRODUCTS](state, isLoading) {
        state.isLoading = isLoading
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
    }
}

export const getters = {}