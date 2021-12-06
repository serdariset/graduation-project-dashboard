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
          <input
            type="text"
            placeholder="Email"
            v-model.trim="$v.user.email.$model"
            :class="formStatus($v.user.email)"
            class="text-input"
          />
          <span
            class="input-error"
            v-if="$v.user.email.$dirty ? !$v.user.email.required : ''"
            >This field is required
          </span>
          <span
            class="input-error"
            v-if="$v.user.email.$dirty ? !$v.user.email.email : ''"
            >Please enter a valid email address</span
          >
        </div>
        <div class="input-group">
          <input
            :type="isShow ? 'text' : 'password'"
            placeholder="Password"
            class="text-input"
          />
          <i
            :class="isShow ? 'far fa-eye-slash' : 'far fa-eye'"
            @click="showPassword"
          ></i>
        </div>
        <div class="input-group">
          <input type="checkbox" id="always" v-model="remember"/>
          <label for="always">Remember me.</label> 
        </div>
      </form>

      <div class="login-button">
        <button>Login</button>
        <span @click="createAnAccount()">I don't have an account.</span>
      </div>
    </div>
  </div>
</template>

<script>
import { vuelidate } from "@/mixins/vuelidate.js";
export default {
  name: "Login",
  data() {
    return {
      isShow: false,
      remember:false,
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  mixins: [vuelidate],
  methods: {
    showPassword() {
      this.isShow = !this.isShow;
    },
    createAnAccount(){
      this.$router.push({path:"/register"})
    },
    formStatus(validation) {
      if (validation.$dirty) {
        if (validation.$error) {
          return "formError";
        } else {
          return "formSuccess";
        }
      }
    },
  },
};
</script>
<style lang="scss">
@import "./Login.scss";
</style>
