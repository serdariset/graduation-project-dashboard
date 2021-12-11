<template>
  <div id="factory-info-container">
    <SideBar />
    <Table :data="list.factoryList" :tableInfo="$t('list')"/>
    
  </div>
</template>

<script>
import SideBar from "@/components/global/SideBar/SideBar.vue";
import Table from "@/components/global/Table/Table.vue";
import { mapState } from "vuex";
export default {
  name: "FactoryInfo",
  
  components: {
    SideBar,
    Table,
  },
  
  computed: {
    ...mapState(["list"]),
  },
  
};
</script>

<style lang="scss">
@import "./Info.scss";
</style>
