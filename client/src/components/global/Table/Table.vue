<template>
  <div id="table-container">
    <div class="table-content">
      <div class="table-name table-item">
        {{ tableInfo.name }}
      </div>

      <div class="table-columns table-item" id="tableColumn">
        <div class="column square"></div>

        <div
          class="column"
          :style="{ width: `calc((100% - 170px) / ${list.columns.length - 1}` }"
          v-for="(item, index) in list.columns"
          :key="index"
        >
          <span @click="order(item)" class="col-names">
            {{ colnamefilter(item) }}
          </span>
          <i
            :class="orderType ? 'fas fa-sort-up' : 'fas fa-sort-down'"
            v-if="orderedColName == item"
          ></i>
        </div>
        <div class="column square-db"><i class="fas fa-cog"></i></div>
        <div class="column square-db">
          <i class="fas fa-plus-circle" @click="newColumn()"></i>
          <i class="fas fa-times-circle" @click="deleteColumn()"></i>
        </div>
      </div>

      <div
        class="table-rows table-item"
        v-for="(items, index) in list.rows"
        :key="items[0]"
      >
        <div class="row square">{{ index + 1 }}</div>
        <div
          class="row"
          :style="{ width: `calc((100% - 170px) / ${list.columns.length - 1}` }"
          v-for="(item, i) in items"
          :key="i"
        >
          {{ item }}
        </div>

        <div class="row square-db">
          <i class="far fa-edit" @click="editFactory(items)"></i>
          <i class="far fa-trash-alt" @click="deleteFactory(items[0])"></i>
        </div>
        <div class="row square-db"></div>
      </div>
      <div class="add-new-row">
        <i class="fas fa-plus-circle" @click="addNewRow()"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Table",

  props: {
    data: Array,
    tableInfo: Object,
  },
  data() {
    return {
      columnQuantity: "",
      isBool: 0,
      orderType: false,
      orderedColName: "",
    };
  },
  created() {
    this.colnamefilter();
  },
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    ...mapActions(["updateFactoryInfo", "deleteConfirm", "getFactoryList"]),

    editFactory(val) {
      this.updateFactoryInfo(val);
      this.$emit("updateRow");
    },
    deleteFactory(val) {
      this.deleteConfirm(val);
      this.$emit("deleteRow");
      console.log(val);
    },
    newColumn() {
      if (this.list.columns.length <= 10) {
        this.$emit("createColumn");
      } else {
        alert("En fazle 10 kolon olabilir");
      }
    },
    deleteColumn() {
      this.$emit("deleteColumn");
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
    order(val) {
      this.orderType = !this.orderType;
      this.orderedColName = val;

      const data = {
        name: val,
        type: this.orderType,
      };

      this.getFactoryList(data);
    },
    addNewRow() {
      this.$emit("createRow");
    },
  },
};
</script>

<style lang="scss">
@import "./Table.scss";
</style>
