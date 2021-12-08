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
  mounted() {
    const remember = localStorage.getItem("isAuth");
    if (remember == null || remember == false) {
      this.$router.push({ path: "/" }, () => {});
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/fonts.scss";
#app {
  font-family: $roboto;
  font-size: 16px;
  background-color: #c0d0d885;
}
</style>
