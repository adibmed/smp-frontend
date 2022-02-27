export default (axios) => ({
  login(email, password) {
    return axios.post("login", { email, password });
  },

  register(payload) {
    return axios.post("register", payload);
  },
});
