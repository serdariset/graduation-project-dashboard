import axios from "axios";
export default {
  state: {
    apiURL: process.env.VUE_APP_API_URI,
    userInfo: [],
  },
  mutations: {
    GET_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    getUserInfo({ state, commit }, payload) {
      return axios
        .get(`${state.apiURL}/user/profile`, {
          headers: { token: payload.token },
        })
        .then((response) => {
          commit("GET_USER_INFO", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    setUserName(state) {
      return state.userInfo.name;
    },
    setUserRole(state) {
      return state.userInfo.role;
    },
  },
};
