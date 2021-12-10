<template>
  <div id="sidebar-container">
    <div class="sidebar-menu">
      <span class="menu-item" :class="menu == 0 ? 'selected' : ''" @click="getFactoryList()">
          {{ $t("header.factoryList") }}
          </span>
      <span class="menu-item" :class="menu == 1 ? 'selected' : ''" @click="getFactoryInfo()">
          {{ $t("header.factoryInfo") }}
      </span>
      <span class="menu-item" :class="menu == 2 ? 'selected' : ''" @click="userSettings()">
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
import { mapGetters } from "vuex";
export default {
  name: "SideBar",
  data(){
      return{
          menu:0
      }
  },
  computed: {
    ...mapGetters(["setUserName"]),
  },
  methods: {
    logOut() {
      localStorage.clear();
      sessionStorage.clear();
      this.$router.push({ path: "/" }, () => {
        location.reload();
      });
    },
  },
};
</script>
