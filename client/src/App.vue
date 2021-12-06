<template>
  <div id="app">
    <Header />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/fonts.scss";
#app {
  font-family: $roboto;
  font-size: 16px;
}
</style>
