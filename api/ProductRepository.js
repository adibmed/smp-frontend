export default axios => ({
    getAllSubmittedProducts() {
        return axios.get('products')
    },

    getAllApprovedProducts() {
        return axios.get('products/approved')
    }
})