<template>
  <div id="sidebar-container">
    <div class="sidebar-menu">
      <span
        class="menu-item"
        :class="menu == 0 ? 'selected' : ''"
        @click="goFactoryList()"
      >
        {{ $t("header.factoryList") }}
      </span>
      <span
        class="menu-item"
        :class="menu == 1 ? 'selected' : ''"
        @click="getFactoryInfo()"
      >
        {{ $t("header.factoryInfo") }}
      </span>
      <span
        class="menu-item"
        :class="menu == 2 ? 'selected' : ''"
        @click="userSettings()"
      >
        {{ $t("header.userSettings") }}
      </span>
    </div>
    <div class="profile-menu">
      <i class="fas fa-user"></i>
      <span class="user-name">{{ setUserName }}</span>
      <i class="fas fa-sign-out-alt" @click="logOut()"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      menu: -1,
    };
  },
  computed: {
    setUserName() {
      let name = localStorage.getItem("userName");
      return name;
    },
  },
  methods: {
    logOut() {
      localStorage.clear();
      sessionStorage.clear();
      this.$router.push({ path: "/" }, () => {
        location.reload();
      });
    },
    goFactoryList() {
      this.menu = 0;
      this.$router.push({ path: "factory-info" }, () => {});
    },
    getFactoryInfo() {
      this.menu = 1;
      this.$router.push({ path: "factory-list" }, () => {});
    },
    userSettings() {
      this.menu = 2;
      this.$router.push({ path: "user-settings" }, () => {});
    },
  },
};
</script>
<style lang="scss">
@import "./SideBar.scss";
</style>
