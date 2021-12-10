<template>
  <div id="app">
    <div>
      <Header />
    </div>
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
  created() {
    const remember = localStorage.getItem("remember");
    if (remember) {
      this.$router.push({ path: "/home" }, () => {});
    } else {
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
