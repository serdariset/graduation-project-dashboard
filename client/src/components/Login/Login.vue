<template>
  <div id="login-container">
    <div class="user-login-group">
      <div class="login-header">
        <span class="logo">
          <img :src="require(`@/assets/logo.png`)" alt="" />
        </span>
        <div class="text-content">
          <span class="brand">Energy</span>
          <span class="name">Dashboard</span>
        </div>
      </div>
      <form class="login-form">
        <div class="input-group">
          <input type="text" placeholder="Email" />
        </div>
        <div class="input-group">
          <input :type="isShow ? 'text' : 'password'" placeholder="Password" />
          <i
            :class="isShow ? 'far fa-eye-slash' : 'far fa-eye'"
            @click="showPassword"
          ></i>
        </div>
        <div class="input-group">
          <input type="checkbox" id="always" />
          <label for="always">Remember me.</label>
        </div>
      </form>

      <div class="login-button">
        <button>Login</button>
        <span>I don't have an account.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showPassword() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style lang="scss">
@import "./Login.scss";
</style>
