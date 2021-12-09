<template>
  <div id="result-modal-container">
    <div class="result-modal">
      <span class="close-window" @click="closeWindow(0)"
        ><i class="fas fa-times"></i
      ></span>
      <div class="result-content" v-if="result.status == true">
        <div class="result-icon">
          <i class="far fa-check-circle"></i>
        </div>
        <div class="result-message">
          <div class="result-message-status success-text">
            {{ $t("modal.success") }}
          </div>
          <div class="result-message-text success-text" v-if="result.user">
            {{ $t("modal.welcome", {user: result.user}) }} <br>
            {{$t('modal.redirecting')}}
          </div>
           <div class="result-message-text success-text" v-else>
            {{ $t("modal.redirecting") }}
          </div>
        </div>
      </div>

      <div class="result-content" v-else-if="result.status == false">
        <div class="result-icon">
          <i class="far fa-times-circle"></i>
        </div>
        <div class="result-message">
          <div class="result-message-status error-text">
            {{ $t("modal.warning") }}
          </div>
          <div class="result-message-text error-text">
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultModal",
  props: {
    result: Object,
    message: String,
  },

  methods: {
    closeWindow(val) {
      this.$emit("close", val);
    },
  },
};
</script>

<style lang="scss">
@import "./ResultModal.scss";
</style>
