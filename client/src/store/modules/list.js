import axios from "axios";

export default {
  state: {
    apiURL: process.env.VUE_APP_API_URI,
    factoryList: [],
  },
  mutations: {
    GET_FACTORY_LIST(state, payload) {
      state.factoryList = payload;
    },
  },
  actions: {
    getFactoryList({ state, commit }, payload) {
      axios
        .get(`${state.apiURL}/factory/list`, payload)
        .then((res) => {
          commit("GET_FACTORY_LIST", res.data);
        })
        .catch((e) => console.log(e));
    },
  },
  getters: {},
};
