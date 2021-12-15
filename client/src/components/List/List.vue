<template>
  <div id="factory-list-container">
    <SideBar />
    <Table
      @updateRow="updateRow = true"
      @deleteRow="deleteRow = true"
      @createColumn="createColumn = true"
      @deleteColumn="deleteColumn = true"
      @createRow="createRow = true"
    />
    <UpdateColumn v-if="updateRow" @updateRow="updateRow = false" />
    <DeleteRow v-if="deleteRow" @deleteRow="deleteRow = false" />
    <CreateColumn v-if="createColumn" @createColumn="createColumn = false" />
    <DeleteColumn v-if="deleteColumn" @deleteColumn="deleteColumn = false" />
    <CreateRow @createRow="createRow = false" v-if="createRow" />
  </div>
</template>

<script>
import SideBar from "@/components/global/SideBar/SideBar.vue";
import Table from "@/components/global/ListTable/ListTable.vue";
import UpdateColumn from "@/components/global/ListTable/TableModals/UpdateColumn/UpdateColumn.vue";
import DeleteRow from "@/components/global/ListTable/TableModals/DeleteRow/DeleteRow.vue";
import CreateColumn from "@/components/global/ListTable/TableModals/CreateColumn/CreateColumn.vue";
import DeleteColumn from "@/components/global/ListTable/TableModals/DeleteColumn/DeleteColumn.vue";
import CreateRow from "@/components/global/ListTable/TableModals/CreateRow/CreateRow.vue";
export default {
  name: "List",

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
    UpdateColumn,
    DeleteRow,
    CreateColumn,
    DeleteColumn,
    CreateRow,
  },
};
</script>

<style lang="scss">
@import "./List.scss";
</style>
