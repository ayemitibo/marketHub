import { use } from "chai";

export default {
  namespaced: true,
  state: {
    userDetail: {},
  },
  mutations: {
    SET_USER_DETAIL(state, userDetail) {
      state.userDetail = userDetail;
    },
  },
  actions: {
    async setCurrentUser({ commit }, payload) {
      try {
        commit("SET_USER_DETAIL", payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
};
