<template>
  <div id="result-modal-container">
    
    <div class="result-modal">
      <span class="close-window"><i class="fas fa-times"></i></span>
      <div class="result-content">
        <div class="result-icon">
          <i class="far fa-check-circle"></i>
        </div>
        <div class="result-message">
          {{result}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"ResultModal",
  props:{
    result:Object
  }
};
</script>

<style lang="scss">
@import "./ResultModal.scss";
</style>
