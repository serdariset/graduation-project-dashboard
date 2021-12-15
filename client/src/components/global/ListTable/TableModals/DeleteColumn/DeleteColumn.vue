<template>
  <div id="delete-column-container">
    <div class="column-modal">
      <div class="modal-name">{{ $t("deleteColumnModal.header") }}</div>
      <div class="column-input-container">
        <div class="input-group">
          <select v-model="colName">
            <option
              :value="item"
              v-for="(item, index) in list.columns"
              :key="index"
            >
              {{ colnamefilter(item) }}
            </option>
          </select>
        </div>
      </div>
      <div class="modal-button-group">
        <button @click="$emit('deleteColumn')">
          {{ $t("deleteColumnModal.cancel") }}
        </button>
        <button @click="deleteCol()">
          {{ $t("deleteColumnModal.delete") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "DeleteColumn",
  data() {
    return {
      colName: "",
    };
  },
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    ...mapActions(["deleteColumnInList"]),
    colnamefilter(val) {
      let locale = this.$i18n.locale;
      let list = this.$i18n.messages[locale].list.column;

      if (list[val] == undefined) {
        return val;
      } else {
        return list[val];
      }
    },
    deleteCol() {
      const data = {
        name: this.colName,
      };
      if (this.colName) {
        this.deleteColumnInList(data).then(() => {
          this.$emit("deleteColumn");
          location.reload();
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "./DeleteColumn.scss";
</style>
