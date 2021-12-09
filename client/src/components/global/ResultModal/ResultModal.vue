<template>
  <div id="result-modal-container">
    <div class="result-modal">
      <span class="close-window" @click="closeWindow(0)"
        ><i class="fas fa-times"></i
      ></span>
      <div class="result-content" v-if="result.type == 1">
        <div class="result-icon">
          <i class="far fa-check-circle"></i>
        </div>
        <div class="result-message" v-if="locale == 'tr'">
          <div class="result-message-status success-text">
            {{ result.res.tr }}
          </div>
          <div class="result-message-text success-text">
            {{ $t("modal.redirecting") }}
          </div>
        </div>
        <div class="result-message" v-else-if="locale == 'en'">
          <div class="result-message-status success-text">
            {{ result.res.en }}
          </div>
          <div class="result-message-text success-text">
            {{ $t("modal.redirecting") }}
          </div>
        </div>
      </div>
      <div class="result-content" v-else-if="result.type == 0">
        <div class="result-icon">
          <i class="far fa-times-circle"></i>
        </div>
        <div class="result-message" v-if="locale == 'tr'">
          <div class="result-message-status error-text">
            {{ result.error.tr.status }}
          </div>
          <div class="result-message-text error-text">
            {{ result.error.tr.message }}
          </div>
        </div>
        <div class="result-message" v-else-if="locale == 'en'">
          <div class="result-message-status error-text">
            {{ result.error.en.status }}
          </div>
          <div class="result-message-text error-text">
            {{ result.error.en.message }}
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
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
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
