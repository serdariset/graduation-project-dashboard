<template>
  <div id="table-container">
    <div class="table-content">
      <div class="table-name table-item">Fabrika Listesi</div>
      <div class="table-columns table-item">
        <div class="column w-25">Firma Adı</div>
        <div class="column w-20">Üyelik Tarihi</div>
        <div class="column w-20">Üyelik Bitiş Tarihi</div>
        <div class="column w-10">Çalışan Sayısı</div>
        <div class="column w-10">Özel Üye</div>
        <div class="column w-15">Ayarlar</div>
      </div>
      <div class="table-rows table-item">
        <div class="row w-25">Firma Adı</div>
        <div class="row w-20">Üyelik Tarihi</div>
        <div class="row w-20">Üyelik Bitiş Tarihi</div>
        <div class="row w-10">Çalışan Sayısı</div>
        <div class="row w-10">Özel Üye</div>
        <div class="row w-15">Ayarlar</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
};
</script>

<style lang="scss">
@import "./Table.scss";
</style>
