<template>
  <div class="info-item header-language-switcher">
    <span class="language-icon">
      <img src="@/assets/English.svg" alt="" />
    </span>

    <span class="language-name">English</span>
    <i class="fas fa-caret-down"></i>
    <div class="language-dropdown">
      <div class="language" v-for="locale in locales" :key="locale">
        <span class="language-icon">
          <img :src="require(`@/assets/${locale}.svg`)" alt="" />
        </span>
        <span class="language-name">{{ locale }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
    };
  },
  /* methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    },
  }, */
};
</script>

<style></style>
