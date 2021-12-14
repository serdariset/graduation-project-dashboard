<template>
  <div id="column-modal-container">
    <div class="column-modal">
      <div class="modal-name">{{ $t("createModal.header") }}</div>
      <div class="column-input-container">
        <div class="input-group">
          <label>{{ $t("createModal.enter") }}</label>
          <input
            type="text"
            :placeholder="$t('createModal.columnName')"
            v-model="columnName"
          />
        </div>
        <div class="input-group">
          <label>{{ $t("createModal.select") }}</label>
          <select v-model="dataType">
            <option value="TEXT">{{ $t("createModal.text") }}</option>
            <option value="NUMERIC">{{ $t("createModal.number") }}</option>
            <option value="DATE">{{ $t("createModal.date") }}</option>
            <option value="BOOLEAN">{{ $t("createModal.boolean") }}</option>
          </select>
        </div>
      </div>
      <span class="create-error" v-if="anyError">{{
        $t("createModal.error")
      }}</span>
      <div class="modal-button-group">
        <button @click="$emit('createColumn')">
          {{ $t("createModal.cancel") }}
        </button>
        <button @click="createNewColumn()">
          {{ $t("createModal.create") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CreateColumn",
  data() {
    return {
      dataType: "",
      columnName: "",
      anyError: false,
    };
  },
  methods: {
    ...mapActions(["createColumn"]),
    createNewColumn() {
      const data = {
        columnName: this.columnName,
        dataType: this.dataType,
      };
      if (this.dataType && this.columnName) {
        this.createColumn(data).then(() => {
          location.reload();
          this.$emit("createColumn");
        });
        this.anyError = false;
      } else {
        this.anyError = true;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./ColumnModal.scss";
</style>
