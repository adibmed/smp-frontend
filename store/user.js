import { LOGIN, REGISTER, LOGOUT } from "./actions.type";
import { SET_PENDING_AUTH } from "./mutations.type";

export const state = () => ({
  isPending: false,
});

export const mutations = {
  [SET_PENDING_AUTH](state, isPending) {
    state.isPending = isPending;
  },
};

export const actions = {
  async [LOGIN]({ commit }, { email, password }) {
    commit(SET_PENDING_AUTH, true);
    this.$auth
      .loginWith("laravelJWT", {
        data: {
          email: email,
          password: password,
        },
      })
      .then((res) => {
        this.$router.push({ name: "index" });
      })
      .catch(() => {});
  },

  async [REGISTER]({ dispatch, commit }, payload) {
    commit(SET_PENDING_AUTH, true);
    const res = await this.$api.auth.register(payload);
    if (res.status === 200) {
      const { email, password } = payload;
      dispatch(LOGIN, { email, password });
    }
    commit(SET_PENDING_AUTH, false);
  },

  async [LOGOUT]({ commit }) {
    commit(SET_PENDING_AUTH, true);
    const res = this.$auth.logout();
    const { status, data } = res;
    if (status === 200) {
      commit(SET_PENDING_AUTH, false);
    }
  },
};

export const getters = {};
