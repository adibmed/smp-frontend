export default (axios) => ({
  all() {
    return axios.get("product");
  },

  create(payload) {
    return axios.post("product", payload);
  },

  update(payload) {
    return axios.put("product", payload);
  },

  show(id) {
    return axios.get(`product/${id}`);
  },

  approved() {
    return axios.get("product/approved");
  },
});
