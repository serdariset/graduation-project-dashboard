<template>
  <div id="update-modal-container">
    <div class="update-modal">
      <div class="modal-name">{{ $t("createNewRow.header") }}</div>
      <div class="modal-input-container">
        <div
          class="input-group"
          v-for="(item, index) in list.columns"
          :key="index"
        >
          <label>{{ colnamefilter(item) }}</label>
          <input type="text" v-model="rows[index]" />
        </div>
      </div>
      <div class="modal-button-group">
        <button @click="$emit('createRow')">
          {{ $t("createNewRow.cancel") }}
        </button>
        <button @click="update()">{{ $t("createNewRow.create") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "UpdateModal",
  data() {
    return {
      rows: {
        row0: "",
        row1: "",
        row2: "",
        row3: "",
        row4: "",
        row5: "",
        row6: "",
        row7: "",
        row8: "",
        row9: "",
        row10: "",
      },
    };
  },
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    ...mapActions(["updateFactory", "createRow"]),
    swicth() {
      this.specialMember = !this.specialMember;
    },
    colnamefilter(val) {
      let locale = this.$i18n.locale;
      let list = this.$i18n.messages[locale].list.column;

      if (list[val] == undefined) {
        return val;
      } else {
        return list[val];
      }
    },
    update() {
      let keys = [];

      for (let i = 1; i < this.list.columns.length; i++) {
        keys.push({ key: this.list.columns[i] });
      }
      for (let j = 0; j < this.list.columns.length; j++) {
        if (this.rows[j] == undefined) {
          keys.push({ values: this.list.factoryInfo[j] });
          console.log(this.rows[j]);
        } else {
          keys.push({ values: this.rows[j] });
        }
      }
      const data = {
        keys: keys,
      };

      this.createRow(data).then(() => {
        this.$emit("createRow");
        location.reload();
      });
    },
  },
};
</script>

<style lang="scss">
@import "./CreateRow.scss";
</style>
