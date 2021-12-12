<template>
  <div id="delete-modal-container">
    <div class="delete-modal">
      <i class="fas fa-exclamation-triangle"></i>
      <div class="caution">
        <span>This action cannot be undone!</span>
        <span>Do you want to continue?</span>
      </div>
      <div class="modal-button-group">
        <button @click="$emit('deleteModalDisplay', false)">Cancel</button>
        <button @click="deleteItem()">Delete</button>
      
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "DeleteModal",
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    ...mapActions(["deleteFactory"]),

    deleteItem() {
      const data = {
        factory_id: this.list.itemIDForDelete,
      };
      this.deleteFactory(data)
      .then(() => {
        this.$emit("deleteModalDisplay", false);
        location.reload()
      });
    },
  },
};
</script>

<style lang="scss">
@import "./DeleteModal.scss";
</style>
