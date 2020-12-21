import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    metadata: [],
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
    users,
  },
});
