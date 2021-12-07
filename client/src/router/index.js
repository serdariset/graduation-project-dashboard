import Vue from "vue";
import VueRouter from "vue-router";

import User from "@/views/User/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "User",
    component: User,
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
