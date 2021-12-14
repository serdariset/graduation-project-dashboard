<template>
  <div>
    <Info />
    {{ list.orderTypeValues }}
  </div>
</template>

<script>
import Info from "@/components/Info/Info.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "FactoryInfo",
  components: {
    Info,
  },
  created() {
    this.getFactoryList();
    this.getColumnFactoryList();
  },
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    ...mapActions(["getFactoryList", "getColumnFactoryList"]),
  },
};
</script>
