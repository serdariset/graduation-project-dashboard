<template>
  <div id="header-container">
    <div id="header-content">
      <div class="header-left-side">
        <!-- Logo Section -->
        <div class="header-logo">
          <img src="@/assets/logo.png" alt="Logo" @click="homePage()" />
        </div>
      </div>
      <div class="header-right-side">
        <!-- Information & Language & Login -->
        <div class="info-item header-user-info">
          {{ setUserName }}
        </div>
        <LocaleSwitcher />
      </div>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher.vue";
export default {
  name: "Header",
  components: {
    LocaleSwitcher,
  },
  computed: {
    setUserName() {
      let name = localStorage.getItem("userName");
      return name;
    },
  },
  methods: {
    homePage() {
      this.$router.push({ path: "/home" }, () => {});
    },
  },
};
</script>
<style lang="scss">
@import "./Header.scss";
</style>
