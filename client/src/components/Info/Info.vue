<template>
  <div id="factory-info-container">
    <SideBar />
    <Table
      :data="list.factoryList"
      :tableInfo="$t('list')"
      @modalDisplay="modalDisplay = true"
      @deleteModalDisplay="deleteModalDisplay = true"
    />
    <UpdateModal v-if="modalDisplay" @modalDisplay="modalDisplay = false" />
    <DeleteModal v-if="deleteModalDisplay" @deleteModalDisplay="deleteModalDisplay = false"/>
  </div>
</template>

<script>
import SideBar from "@/components/global/SideBar/SideBar.vue";
import Table from "@/components/global/Table/Table.vue";
import UpdateModal from "@/components/global/TableModals/UpdateModal.vue";
import DeleteModal from "@/components/global/TableModals/DeleteModal.vue"

import { mapState } from "vuex";
export default {
  name: "FactoryInfo",
  data() {
    return {
      modalDisplay: false,
      deleteModalDisplay:false
    };
  },

  components: {
    SideBar,
    Table,
    UpdateModal,
    DeleteModal
  },

  computed: {
    ...mapState(["list"]),
  },
};
</script>

<style lang="scss">
@import "./Info.scss";
</style>
