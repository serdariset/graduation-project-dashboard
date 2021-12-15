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
            class="text-input"
            v-model="user.email"
          />
        </div>
        <div class="input-group">
          <input
            :type="isShow ? 'text' : 'password'"
            v-bind:placeholder="$t('login.password')"
            class="text-input"
            v-model="user.password"
          />
          <i
            :class="isShow ? 'far fa-eye-slash' : 'far fa-eye'"
            @click="showPassword"
          ></i>
        </div>
        <div class="input-group">
          <input type="checkbox" id="always" v-model="remember" />
          <label for="always">{{ $t("login.remember") }}</label>
        </div>
      </form>

      <div class="login-button">
        <button @click="getUserTokenForLogin()">
          {{ $t("login.login") }}
        </button>
        <span @click="createAnAccount()">{{ $t("login.account") }}</span>
      </div>
    </div>
    <ResultModal
      v-if="resultModal == 1"
      :result="login.userToken"
      :message="
        login.userToken.type == 'user' ? $t('modal.user') : $t('modal.password')
      "
      @close="resultModal = 0"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ResultModal from "@/components/global/ResultModal/ResultModal.vue";
export default {
  name: "Login",
  components: {
    ResultModal,
  },
  data() {
    return {
      isShow: false,
      remember: false,
      user: {
        email: "",
        password: "",
      },
      resultModal: 0,
    };
  },
  computed: {
    ...mapState(["login"]),
  },
  mounted() {
    const remember = localStorage.getItem("remember");
    if (remember) {
      this.$router.push({ path: "/home" }, () => {});
    }
  },

  methods: {
    ...mapActions(["getUserToken"]),
    showPassword() {
      this.isShow = !this.isShow;
    },
    createAnAccount() {
      this.$router.push({ path: "/register" }, () => {});
    },

    getUserTokenForLogin() {
      const data = {
        email: this.user.email,
        password: this.user.password,
      };

      if (this.user.email && this.user.password) {
        this.resultModal = 1;
        this.getUserToken({ data: data, remember: this.remember }).then(() => {
          if (this.login.userToken.status) {
            setTimeout(() => {
              this.$router.push({ path: "/home" }, () => {
                location.reload();
              });
              this.resultModal = 0;
            }, 1000);
          }
        });
      }
    },
  },
};
</script>
<style lang="scss">
@import "./Login.scss";
</style>
