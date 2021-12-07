<template>
  <div id="signup-container">
    <div class="user-signup-group">
      <div class="signup-header">
        <span class="logo">
          <img :src="require(`@/assets/logo.png`)" alt="" />
        </span>
        <div class="text-content">
          <span class="brand">Energy</span>
          <span class="name">Dashboard</span>
        </div>
      </div>
      <form class="signup-form">
           <div class="input-group">
          <input
            type="text"
            placeholder="Name"
            v-model.trim="$v.user.name.$model"
            class="text-input"
            :class="formStatus($v.user.name)"
          />
          <span
            class="input-error"
            v-if="$v.user.name.$dirty ? !$v.user.name.required : ''"
            >This field is required
          </span>
          <span
            class="input-error"
            v-if="$v.user.name.$dirty ? !$v.user.name.minLength : ''"
            >En az 8</span
          >
        </div>
        <div class="input-group">
          <input
            type="text"
            placeholder="Email"
            v-model.trim="$v.user.email.$model"
            class="text-input"
            :class="formStatus($v.user.email)"
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
            type="text"
            placeholder="Password"
            v-model.trim="$v.user.password.$model"
            class="text-input"
            :class="formStatus($v.user.password)"
          />
          <span
            class="input-error"
            v-if="$v.user.password.$dirty ? !$v.user.password.required : ''"
            >This field is required
          </span>
          <span
            class="input-error"
            v-if="$v.user.password.$dirty ? !$v.user.password.minLength : ''"
            >8</span
          >
        </div>
        <div class="input-group">
            <input type="radio" name="role" value="admin" v-model="role" id="admin">
            <label for="admin">Admin</label>
            
            <input type="radio" name="role" value="editor" v-model="role" id="editor">
            <label for="editor">Editor</label>
        </div>
      </form>
      {{role}}
    </div>
  </div>
</template>

<script>
import { vuelidate } from "@/mixins/vuelidate.js";
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      role:"",
    };
  },
  mixins: [vuelidate],
  methods: {
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
@import "./SignUp.scss";
</style>
