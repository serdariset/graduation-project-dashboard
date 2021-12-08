<template>
  <div class="info-item header-language-switcher">
    <span
      @click="switchLocale('tr'), (active = 0)"
      class="language"
      :class="active == 0 ? 'activeLang' : ''"
      >TR</span
    >
    <span
      @click="switchLocale('en'), (active = 1)"
      class="language"
      :class="active == 1 ? 'activeLang' : ''"
      >EN</span
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      setLanguage: "English",
      active: 0,
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
    };
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    },
  },
};
</script>

<style></style>
