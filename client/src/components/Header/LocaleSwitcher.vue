<template>
  <div class="info-item header-language-switcher">
    <select
      name="lang"
      id="language"
      v-model="setLanguage"
      @change="switchLocale(setLanguage)"
    >
      <option value="Türkçe">Türkçe</option>
      <option value="English">English</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      setLanguage: "English",
    };
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
      console.log(locale);
    },
  },
};
</script>

<style></style>
