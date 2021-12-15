<template>
  <div>
    <List />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import List from "@/components/List/List.vue";
export default {
  name: "FactoryList",
  components: {
    List,
  },
  created() {
    this.getFactoryDetail();
    this.getColumnFactoryDetail();
  },

  methods: {
    ...mapActions(["getFactoryDetail", "getColumnFactoryDetail"]),
  },
};
</script>

<style></style>
