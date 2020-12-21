import { db } from "../../firebase";
export default {
  namespaced: true,
  state: {
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    async getUsers({ commit }, payload) {
      try {
        await db
          .collection("business")
          .get()
          .then((res) => {
            let users = res.docs.map((doc) => {
              return doc.data();
            });
            commit("SET_USERS", users);
          });
      } catch (e) {
        console.log(e, "error");
      }
    },
  },
  getters: {
    getBusinessCount({ users }) {
      return [
        ...users.filter((item) => {
          return item.userType === "business_signup";
        }),
      ].length;
    },
    getBusinessCount({ users }) {
      return [
        ...users.filter((item) => {
          return item.userType === "business_signup";
        }),
      ].length;
    },
  },
};
