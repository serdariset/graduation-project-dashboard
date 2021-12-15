import axios from "axios";

export default {
  state: {
    apiURL: "https://dashboard-server-one.vercel.app",
    registerResult: [],
  },
  mutations: {
    GET_REGISTER_RESULT(state, payload) {
      state.registerResult = payload;
    },
  },
  actions: {
    userRegister({ state, commit }, payload) {
      return axios
        .post(`${state.apiURL}/user/register`, payload)
        .then((res) => {
          commit("GET_REGISTER_RESULT", res.data);
        })
        .catch((error) => {
          commit("GET_REGISTER_RESULT", error.response.data);
        });
    },
  },
  getters: {},
};
