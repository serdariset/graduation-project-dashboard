<template>
  <div id="header-container">
    <div id="header-content">
      <div class="header-left-side">
        <!-- Logo Section -->
        <div class="header-logo">
          <img src="@/assets/logo.png" alt="Logo" />
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
import { mapGetters } from "vuex";
import LocaleSwitcher from "./LocaleSwitcher.vue";
export default {
  name: "Header",
  components: {
    LocaleSwitcher,
  },
  computed: {
    ...mapGetters(["setUserName"]),
  },
};
</script>
<style lang="scss">
@import "./Header.scss";
</style>
