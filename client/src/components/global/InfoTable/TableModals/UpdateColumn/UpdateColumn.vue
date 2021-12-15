<template>
  <div id="update-modal-container">
    <div class="update-modal">
      <div class="modal-name">
        
        <span class="header"> {{ $t("info.updateColumn.header") }}</span>
        <span class="caution">{{$t('info.updateColumn.caution')}}</span>
      </div>
      <div class="modal-input-container">
        <div
          class="input-group"
          v-for="(item, index) in info.factoryInfo"
          :key="index"
        >
          <label>
            {{colnamefilter(info.columns[index]) }}
            {{ exampleFilter(info.columns[index]) }}
            </label>
          <input type="text" v-model="rows[index]" :placeholder="dateFilter(item)" />
        </div>
      </div>
      <div class="modal-button-group">
        <button @click="$emit('updateRow')">Cancel</button>
        <button @click="update()">Save</button>
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
  created(){
    this.exampleFilter()
    this.colnamefilter()
    this.dateFilter()
  },
  computed: {
    ...mapState(["info"]),
  },
  methods: {
    ...mapActions(["updateFactory"]),
    swicth() {
      this.specialMember = !this.specialMember;
    },
     exampleFilter(val) {
      let locale = this.$i18n.locale;
      let info = this.$i18n.messages[locale].info.updateColumn.column;
      

      if (info[val] == undefined) {
        return val;
      } else {
        return info[val];
      }
    },
    dateFilter(val) {
      let newVal;
      if (typeof val !== "string") {
        newVal = val;
      } else {
        if (val.includes("T21") == true) {
          newVal = val.slice(0, 10);
        } else {
          newVal = val;
        }
      }

      return newVal;
    },
    colnamefilter(val) {
      let locale = this.$i18n.locale;
      let info = this.$i18n.messages[locale].info.column;

      if (info[val] == undefined) {
        return val;
      } else {
        return info[val];
      }
    },
    update() {
      let keys = [];

      for (let i = 1; i < this.info.columns.length; i++) {
        keys.push({ key: this.info.columns[i] });
      }
      for (let j = 0; j < this.info.columns.length; j++) {
        if (this.rows[j] == undefined) {
          keys.push({ values: this.info.factoryInfo[j] });
          console.log(this.rows[j]);
        } else {
          keys.push({ values: this.rows[j] });
        }
      }
      const data = {
        keys: keys,
      };

      this.updateFactory(data).then(() => {
        this.$emit("updateRow");
        location.reload();
      });
    },
  },
};
</script>

<style lang="scss">
@import "./UpdateColumn.scss";
</style>
