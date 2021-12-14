<template>
  <div id="factory-info-container">
    <SideBar />
    <Table
      :data="list.factoryList"
      :tableInfo="$t('list')"
      @updateRow="updateRow = true"
      @deleteRow="deleteRow = true"
      @createColumn="createColumn = true"
      @deleteColumn="deleteColumn = true"
      @createRow="createRow = true"
    />
    <UpdateModal v-if="updateRow" @updateRow="updateRow = false" />
    <DeleteModal v-if="deleteRow" @deleteRow="deleteRow = false" />
    <ColumnModal v-if="createColumn" @createColumn="createColumn = false" />
    <DeleteColumn v-if="deleteColumn" @deleteColumn="deleteColumn = false" />
    <CreateRow @createRow="createRow = false" v-if="createRow" />
  </div>
</template>

<script>
import SideBar from "@/components/global/SideBar/SideBar.vue";
import Table from "@/components/global/Table/Table.vue";
import UpdateModal from "@/components/global/TableModals/UpdateModal.vue";
import DeleteModal from "@/components/global/TableModals/DeleteModal.vue";
import ColumnModal from "@/components/global/TableModals/ColumnModal.vue";
import DeleteColumn from "@/components/global/TableModals/DeleteColumn.vue";
import CreateRow from "@/components/global/TableModals/CreateRow.vue";

import { mapState } from "vuex";
export default {
  name: "FactoryInfo",
  data() {
    return {
      updateRow: false,
      deleteRow: false,
      createColumn: false,
      deleteColumn: false,
      createRow: false,
    };
  },

  components: {
    SideBar,
    Table,
    UpdateModal,
    DeleteModal,
    ColumnModal,
    DeleteColumn,
    CreateRow,
  },

  computed: {
    ...mapState(["list"]),
  },
};
</script>

<style lang="scss">
@import "./Info.scss";
</style>
