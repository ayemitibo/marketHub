import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./router";
import store from "./store";

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
