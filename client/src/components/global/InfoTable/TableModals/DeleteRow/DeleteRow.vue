<template>
  <div id="delete-modal-container">
    <div class="delete-modal">
      <i class="fas fa-exclamation-triangle"></i>
      <div class="caution">
        <span>{{ $t("deleteModal.undone") }}</span>
        <span>{{ $t("deleteModal.continue") }}</span>
      </div>
      <div class="modal-button-group">
        <button @click="$emit('deleteRow')">
          {{ $t("deleteModal.cancel") }}
        </button>
        <button @click="deleteItem()">{{ $t("deleteModal.delete") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "DeleteModal",
  computed: {
    ...mapState(["info"]),
  },
  methods: {
    ...mapActions(["deleteFactory"]),

    deleteItem() {
      const data = {
        factory_id: this.info.itemNameForDelete,
      };
      this.deleteFactory(data).then(() => {
        this.$emit("deleteRow");
        location.reload();
      });
    },
  },
};
</script>

<style lang="scss">
@import "./DeleteRow.scss";
</style>
