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
    GET_FACTORY_DETAIL(state, payload) {
      state.factoryList = payload;
    },
    UPDATE_ROW(state, payload) {
      state.factoryInfo = payload;
    },
    GET_ID_FOR_DELETE(state, payload) {
      state.itemIDForDelete = payload;
    },
    FACTORY_DETAIL_COLUMN_NAMES(state, payload) {
      state.columns = payload;
    },
    FACTORY_DETAIL_ROWS(state, payload) {
      state.rows = payload;
    },
  },
  actions: {
    getFactoryDetail({ state, commit }, payload) {
      
      axios
        .post(`${state.apiURL}/list/factory-list`, payload)
        .then((res) => {
          commit("GET_FACTORY_DETAIL", res.data);

          commit(
            "FACTORY_DETAIL_ROWS",
            res.data.map((item) => Object.values(item))
          );
        })
        .catch((e) => console.log(e));
    },
    getColumnFactoryDetail({ state, commit }) {
      axios.get(`${state.apiURL}/list/column`).then((res) => {
        commit("FACTORY_DETAIL_COLUMN_NAMES", res.data.name);
      });
    },
    deleteFactoryFromList({ state }, payload) {
      axios
        .delete(`${state.apiURL}/list/delete`, { data: payload })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
    deleteColumnInList({ state }, payload) {
      axios
        .post(`${state.apiURL}/list/delete-column`, payload)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
    createColumnInList({ state }, payload) {
      axios
        .post(`${state.apiURL}/list/create-column`, payload)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
    createRowInList({ state }, payload) {
      axios
        .post(`${state.apiURL}/list/create-row`, payload)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
    updateRowInList({ state }, payload) {
      axios
        .post(`${state.apiURL}/list/update`, payload)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
    updateRow({ commit }, payload) {
      return commit("UPDATE_ROW", payload);
    },

    deleteRowWithID({ commit }, payload) {
      return commit("GET_ID_FOR_DELETE", payload);
    },
  },
};
