import Vue from "vue";
import Router from "vue-router";

import DashboardWrapper from "@/components/Layout/DashboardWrapper";

// Dashboard Screens
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import AdminCreateUser from "../views/Admin-create-user.vue";
import Users from "../views/Users.vue";
import Login from "../views/Login.vue";

Vue.use(Router);
export const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/account",
    component: DashboardWrapper,
    redirect: "/account/dashboard",
    children: [
      {
        path: "dashboard",
        name: "home",
        component: Home,
        meta: {
          title: "Market Hub - Welcome to Market Hub",
          page_name: "Dashboard",
        },
      },
      {
        path: "admin-create-user",
        name: "home",
        component: AdminCreateUser,
        meta: {
          title: "Market Hub - Welcome to Market Hub",
          page_name: "Dashboard",
        },
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile,
        meta: {
          title: "Market Hub - Welcome to Market Hub",
          page_name: "Profile",
        },
      },
      {
        path: "admin",
        name: "Admin",
        component: Admin,
        meta: {
          title: "Market Hub - Welcome to Market Hub",
          page_name: "Admin",
        },
      },
      {
        path: "users",
        name: "Users",
        component: Users,
        meta: {
          title: "Market Hub - Welcome to Market Hub",
          page_name: "Admin",
        },
      },
    ],
  },
];
