export default axios => ({
    all() {
        return axios.get('product')
    },

    approved() {
        return axios.get('product/approved')
    }
})