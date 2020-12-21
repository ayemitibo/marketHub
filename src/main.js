import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./router";
import store from "./store";
import VueIziToast from "vue-izitoast";
import "izitoast/dist/css/iziToast.css";
import Vuelidate from "vuelidate";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import { notifications } from "./mixins/notifications";

Vue.mixin(notifications);
Vue.prototype.Nprogress = Nprogress;
Vue.use(VueIziToast);

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
