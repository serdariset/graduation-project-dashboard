import Vue from "vue";
import VueRouter from "vue-router";

import User from "@/views/User/User.vue";
import Home from "@/views/Home/Home.vue";
import Register from "@/views/Register/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "User",
    component: User,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/factory-info",
    name: "FactoryInfo",
    component: () => import("@/views/FactoryInfo/FactoryInfo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
