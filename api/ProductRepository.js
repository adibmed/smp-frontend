export default axios => ({
    all() {
        return axios.get('product')
    },

    create(payload) {
        return axios.post('product', payload)
    },

    approved() {
        return axios.get('product/approved')
    }
})