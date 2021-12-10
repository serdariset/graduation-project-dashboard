import Vue from "vue";
import Vuex from "vuex";
import register from "./modules/register";
import login from "./modules/login";
import profile from "./modules/profile";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    register,
    login,
    profile,
  },
});
