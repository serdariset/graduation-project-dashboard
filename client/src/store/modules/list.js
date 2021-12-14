import axios from "axios";

export default {
  state: {
    apiURL: process.env.VUE_APP_API_URI,
    factoryList: [],
    factoryInfo: [],
    itemIDForDelete: "",
    columns: "",
    rows: "",
  },
  mutations: {
    GET_FACTORY_LIST(state, payload) {
      state.factoryList = payload;
    },
    UPDATE_FACTORY_INFO(state, payload) {
      state.factoryInfo = payload;
    },
    GET_NAME_FOR_DELETE(state, payload) {
      state.itemNameForDelete = payload;
    },
    FACTORY_LIST_COLUMN_NAMES(state, payload) {
      state.columns = payload;
    },
    FACTORY_LIST_ROWS(state, payload) {
      state.rows = payload;
    },
  },
  actions: {
    getFactoryList({ state, commit }, payload) {
      console.log(payload);
      axios
        .post(`${state.apiURL}/factory/list`, payload)
        .then((res) => {
          commit("GET_FACTORY_LIST", res.data);
          commit(
            "FACTORY_LIST_ROWS",
            res.data.map((item) => Object.values(item))
          );
        })
        .catch((e) => console.log(e));
    },
    getColumnFactoryList({ state, commit }) {
      axios.get(`${state.apiURL}/factory/column`).then((res) => {
        commit("FACTORY_LIST_COLUMN_NAMES", res.data.name);
      });
    },

    deleteFactory({ state }, payload) {
      axios
        .delete(`${state.apiURL}/factory/delete`, { data: payload })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
    createColumn({ state }, payload) {
      axios
        .post(`${state.apiURL}/factory/create-column`, payload)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
    columnDelete({ state }, payload) {
      axios
        .post(`${state.apiURL}/factory/delete-column`, payload)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
    updateFactory({ state }, payload) {
      axios
        .post(`${state.apiURL}/factory/update`, payload)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
    createRow({ state }, payload) {
      axios
        .post(`${state.apiURL}/factory/create-row`, payload)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },

    deleteConfirm({ commit }, payload) {
      return commit("GET_NAME_FOR_DELETE", payload);
    },
    updateFactoryInfo({ commit }, payload) {
      return commit("UPDATE_FACTORY_INFO", payload);
    },
  },
};
