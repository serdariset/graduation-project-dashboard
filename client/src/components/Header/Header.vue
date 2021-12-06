<template>
  <div id="header-container">
    <div id="header-content">
      <div class="header-left-side">
        <!-- Logo Section -->
        <div class="header-logo">
          <img src="@/assets/logo.png" alt="Logo" />
        </div>
        <!-- Menu Section -->
        <div class="header-menu">
          <span class="menu-item">Factory List</span>
          <span class="menu-item">Factory Info</span>
          <span class="menu-item">User Settings</span>
        </div>
      </div>
      <div class="header-right-side">
        <!-- Information & Language & Login -->
        <div class="info-item header-user-info">Serdar İset</div>
        <LocaleSwitcher />
        <div class="info-item header-login">
          <i class="fas fa-sign-out-alt"></i>
        </div>
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
};
</script>
<style lang="scss">
@import "./Header.scss";
</style>
