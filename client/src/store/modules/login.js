import axios from "axios";

export default {
  state: {
    apiURL: process.env.VUE_APP_API_URI,
    userToken: [],
  },
  mutations: {
    GET_USER_TOKEN(state, payload) {
      state.userToken = payload;
    },
  },
  actions: {
    getUserToken({ state, commit }, payload) {
      console.log(payload);
      return axios
        .post(`${state.apiURL}/user/login`, payload.data)
        .then((response) => {
          commit("GET_USER_TOKEN", response.data);
          if (response.data.status == true) {
            const token = response.data.accessToken;
            if (payload.remember == true) {
              localStorage.setItem("user", token);
              localStorage.setItem("remember", true);
            } else {
              sessionStorage.setItem("user", token);
              localStorage.setItem("remember", false);
            }
          }
        })
        .catch((error) => {
          commit("GET_USER_TOKEN", error.response.data);
        });
    },
  },
  getters: {},
};
