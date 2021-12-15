import axios from "axios";
export default {
  state: {
    apiURL: "https://dashboard-server-one.vercel.app",
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
          localStorage.setItem("userName", response.data.name);
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
