<template>
  <div>
    <Info />
  </div>
</template>

<script>
import Info from "@/components/Info/Info.vue";
import { mapActions } from "vuex";
export default {
  name: "FactoryInfo",
  components: {
    Info,
  },
  created() {
    this.getFactoryList();
    this.getColumnFactoryList();
  },

  methods: {
    ...mapActions(["getFactoryList", "getColumnFactoryList"]),
  },
};
</script>
