import axios from "axios";

export default {
  state: {
    apiURL: process.env.VUE_APP_API_URI,
    registerResult: [],
  },
  mutations: {
    GET_REGISTER_RESULT(state, payload) {
      state.registerResult = payload;
      console.log(payload);
    },
  },
  actions: {
    userRegister({ state, commit }, payload) {
      return axios
        .post(`${state.apiURL}/user/register`, payload)
        .then((res) => {
          commit("GET_REGISTER_RESULT", { res: res.data, type: 1 });
          console.log(res);
        })
        .catch((error) => {
          commit("GET_REGISTER_RESULT", {
            error: error.response.data,
            type: 0,
          });
          console.log(error.response.data);
        });
    },
  },
  getters: {},
};
