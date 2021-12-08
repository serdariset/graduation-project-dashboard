<template>
  <div id="login-container">
    <div class="user-login-group">
      <div class="login-header">
        <span class="logo">
          <img :src="require(`@/assets/logo.png`)" alt="" />
        </span>
        <div class="text-content">
          <span class="brand">Energy</span>
          <span class="name">{{ $t("login.dashboard") }}</span>
        </div>
      </div>
      <form class="login-form">
        <div class="input-group">
          <input
            type="text"
            v-bind:placeholder="$t('login.email')"
            v-model.trim="$v.user.email.$model"
            :class="formStatus($v.user.email)"
            class="text-input"
          />
          <span
            class="input-error"
            v-if="$v.user.email.$dirty ? !$v.user.email.required : ''"
            >*{{ $t("errors.required") }}
          </span>
          <span
            class="input-error"
            v-if="$v.user.email.$dirty ? !$v.user.email.email : ''"
            >*{{ $t("errors.isEmail") }}</span
          >
        </div>
        <div class="input-group">
          <input
            :type="isShow ? 'text' : 'password'"
            v-bind:placeholder="$t('login.password')"
            class="text-input"
            v-model.trim="$v.user.password.$model"
            :class="formStatus($v.user.password)"
          />
          <i
            :class="isShow ? 'far fa-eye-slash' : 'far fa-eye'"
            @click="showPassword"
          ></i>
          <span
            class="input-error"
            v-if="$v.user.password.$dirty ? !$v.user.password.required : ''"
            >*{{ $t("errors.required") }}
          </span>
          <span
            class="input-error"
            v-if="$v.user.password.$dirty ? !$v.user.password.minLength : ''"
            >*{{ $t("errors.password.length") }}
          </span>
        </div>
        <div class="input-group">
          <input type="checkbox" id="always" v-model="remember" />
          <label for="always">{{ $t("login.remember") }}</label>
        </div>
      </form>

      <div class="login-button">
        <button>{{ $t("login.login") }}</button>
        <span @click="createAnAccount()">{{ $t("login.account") }}</span>
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
      remember: false,
      user: {
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
    createAnAccount() {
      this.$router.push({ path: "/register" }, () => {});
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
