import axios from "axios";

export default {
  state: {
    apiURL: process.env.VUE_APP_API_URI,
    factoryList: [],
    factoryInfo: [],
    itemIDForDelete: "",
  },
  mutations: {
    GET_FACTORY_LIST(state, payload) {
      state.factoryList = payload;
    },
    UPDATE_FACTORY_INFO(state, payload) {
      state.factoryInfo = payload;
    },
    GET_ITEM_ID_FOR_DELETE(state, payload) {
      state.itemIDForDelete = payload;
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

    deleteFactory({ state }, payload) {
      console.log(payload);
      axios
        .delete(`${state.apiURL}/factory/delete`, {data:payload})
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },

    deleteConfirm({ commit }, payload) {
      return commit("GET_ITEM_ID_FOR_DELETE", payload);
    },
    updateFactoryInfo({ commit }, payload) {
      return commit("UPDATE_FACTORY_INFO", payload);
    },
  },
  getters: {},
};
