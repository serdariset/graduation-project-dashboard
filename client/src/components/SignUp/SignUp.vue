<template>
  <div id="signup-container">

    <div class="user-signup-group">

      <div class="signup-header">
        <span class="logo">
          <img :src="require(`@/assets/logo.png`)" alt="" />
        </span>
        <div class="text-content">
          <span class="brand">Energy</span>
          <span class="name">{{ $t("register.dashboard") }}</span>
        </div>
      </div>
      <form class="signup-form">
        <div class="input-group">
          <input
            type="text"
            v-bind:placeholder="$t('register.name')"
            v-model.trim="$v.user.name.$model"
            class="text-input"
            :class="formStatus($v.user.name)"
          />
          <span
            class="input-error"
            v-if="$v.user.name.$dirty ? !$v.user.name.required : ''"
            >*{{ $t("errors.required") }}
          </span>

          <span
            class="input-error"
            v-if="$v.user.name.$dirty ? !$v.user.name.mustBeText : ''"
            >*{{ $t("errors.name.number") }}</span
          >
          <span
            class="input-error"
            v-if="$v.user.name.$dirty ? !$v.user.name.minLength : ''"
            >*{{ $t("errors.name.length") }}</span
          >
        </div>
        <div class="input-group">
          <input
            type="text"
            v-bind:placeholder="$t('register.email')"
            v-model.trim="$v.user.email.$model"
            class="text-input"
            :class="formStatus($v.user.email)"
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
            type="text"
            v-bind:placeholder="$t('register.password')"
            v-model.trim="$v.user.password.$model"
            class="text-input"
            :class="formStatus($v.user.password)"
          />
          <span
            class="input-error"
            v-if="$v.user.password.$dirty ? !$v.user.password.required : ''"
            >*{{ $t("errors.required") }}
          </span>
          <span
            class="input-error"
            v-if="$v.user.password.$dirty ? !$v.user.password.minLength : ''"
            >*{{ $t("errors.password.length") }}</span
          >
          <span
            class="input-error"
            v-if="$v.user.password.$dirty ? !$v.user.password.numeric : ''"
            >*{{ $t("errors.password.numeric") }}</span
          >
          <span
            class="input-error"
            v-if="$v.user.password.$dirty ? !$v.user.password.uppercase : ''"
            >*{{ $t("errors.password.uppercase") }}</span
          >
          <span
            class="input-error"
            v-if="$v.user.password.$dirty ? !$v.user.password.lowercase : ''"
            >*{{ $t("errors.password.lowercase") }}</span
          >
        </div>
        <div class="input-group">
          <input
            type="radio"
            name="role"
            value="admin"
            v-model="role"
            id="admin"
          />
          <label
            for="admin"
            class="adminRole"
            @click="selected = 0"
            :class="selected == 0 ? 'selected' : ''"
            >{{ $t("register.role.admin") }}</label
          >

          <input
            type="radio"
            name="role"
            value="editor"
            v-model="role"
            id="editor"
          />
          <label
            for="editor"
            class="editorRole"
            @click="selected = 1"
            :class="selected == 1 ? 'selected' : ''"
            >{{ $t("register.role.editor") }}</label
          >
        </div>
      </form>

      <div class="signup-button">
        <span class="input-error" v-show="errorAll == 1">{{
          $t("errors.errorAll")
        }}</span>
        <button @click="createAccount($v.user)">
          {{ $t("register.signup") }}
        </button>
       
      </div>
    </div> 
    
    <ResultModal  v-show="resultModal == 1" :result="register.registerResult"/>
  </div>
</template>

<script>
import { vuelidate } from "@/mixins/vuelidate.js";
import { mapActions, mapState } from "vuex";
import ResultModal from "@/components/global/ResultModal/ResultModal.vue"
export default {
  name: "SignUp",
  components:{
    ResultModal
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      role: "",
      selected: -1,
      errorAll: 0,
      resultModal:1
    
    };
  },
  computed: {
    ...mapState(["register"]),
  },
  mixins: [vuelidate],
  methods: {
    ...mapActions(["userRegister"]),
    formStatus(validation) {
      if (validation.$dirty) {
        if (validation.$error) {
          return "formError";
        } else {
          return "formSuccess";
        }
      }
    },
    createAccount(val) {
      const data = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        role: this.role,
      };

      if (!val.$error && val.$dirty && this.role !== "") {
        this.userRegister(data)
        this.errorAll = 0;
        this.resultModal = 1
      } else {
        this.errorAll = 1;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./SignUp.scss";
</style>
