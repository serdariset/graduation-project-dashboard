<template>
  <div id="table-container">
    <div class="table-content">
      <div class="table-name table-item">{{ tableInfo.name }}</div>
      <div class="table-columns table-item" id="tableColumn">
        <div class="column"></div>
        <div
          class="column"
          :style="{ width: columnQuantity }"
          v-for="item in tableInfo.column"
          :key="item"
        >
          {{ item }}
        </div>
        <div class="column"><i class="fas fa-plus-circle"></i></div>
      </div>
      <div
        class="table-rows table-item"
        v-for="(item, index) in data"
        :key="item + 'list'"
      >
        <div class="row">{{ index + 1 }}</div>
        <div class="row" :style="{ width: columnQuantity }">
          {{ item.factory_name }}
        </div>
        <div class="row" :style="{ width: columnQuantity }">
          {{ item.membership_date.slice(0, 10) }}
        </div>
        <div class="row" :style="{ width: columnQuantity }">
          {{ item.membership_ending_date.slice(0, 10) }}
        </div>
        <div class="row" :style="{ width: columnQuantity }">
          {{ item.employees_number }}
        </div>
        <div class="row" :style="{ width: columnQuantity }">
          <i
            class="far fa-check-circle"
            v-if="item.special_membership == true"
          ></i>
          <i
            class="far fa-times-circle"
            v-else-if="item.special_membership == false"
          ></i>
        </div>
        <div class="row" :style="{ width: columnQuantity }">
          <i class="far fa-edit" @click="editFactory(item)"></i>
          <i class="far fa-trash-alt" @click="deleteFactory(item.factory_id)"></i>
        </div>
        <div class="row"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Table",
  
  props: {
    data: Array,
    tableInfo: Object,
  },
  data() {
    return {
      columnQuantity: "",
    };
  },
  mounted() {
    this.getColumnNumber();
  },
  methods: {
    ...mapActions(["updateFactoryInfo","deleteConfirm"]),
    getColumnNumber() {
      const quantity = document.getElementById("tableColumn").childElementCount;
      const width = `calc((100% - 85px) / ${quantity - 2})`;
      this.columnQuantity = width;
    },
    editFactory(val) {
      this.updateFactoryInfo(val);
      this.$emit("modalDisplay", true);
    },
    deleteFactory(val){
      this.deleteConfirm(val)
      this.$emit('deleteModalDisplay',true)
    }
  },
};
</script>

<style lang="scss">
@import "./Table.scss";
</style>
