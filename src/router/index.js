import Vue from "vue";
import Router from "vue-router";

import DashboardWrapper from "@/components/Layout/DashboardWrapper";

// Dashboard Screens
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";

Vue.use(Router);
export const routes = [
  {
    path: "/",
    component: DashboardWrapper,
    redirect: "/account/dashboard",
    children: [
      {
        path: "/account/dashboard",
        name: "home",
        component: Home,
        meta: {
          title: "Market Hub - Welcome to Market Hub",
          page_name: "Dashboard",
        },
      },
      {
        path: "/account/profile",
        name: "Profile",
        component: Profile,
        meta: {
          title: "Market Hub - Welcome to Market Hub",
          page_name: "Profile",
        },
      },
      {
        path: "/account/admin",
        name: "Admin",
        component: Admin,
        meta: {
          title: "Market Hub - Welcome to Market Hub",
          page_name: "Admin",
        },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
