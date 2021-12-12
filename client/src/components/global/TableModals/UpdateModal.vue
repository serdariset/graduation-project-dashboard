<template>
  <div id="update-modal-container">
    <div class="update-modal">
      <div class="modal-name">Update Factory Info</div>
      <div class="modal-input-container">
        <div class="input-group">
          <label>Factory Name</label>
          <input
            type="text"
            :placeholder="list.factoryInfo.factory_name"
            v-model="factoryName"
          />
        </div>
        <div class="input-group">
          <label>Membership Date</label>
          <div class="date-group">
            <label>Day<input type="text" maxlength="2" v-model="mshipDate.day"/></label>
            
            <label>Month<input type="text" maxlength="2" v-model="mshipDate.month"/></label>
            
            <label>Year<input type="text" maxlength="4" v-model="mshipDate.year"/></label>
            
          </div>
        </div>
        <div class="input-group">
          <label>Membership Ending Date</label>
          <div class="date-group">
            <div class="date-group">
              <label>Day<input type="text" maxlength="2" v-model="mshipDate.day"/></label>
              
              <label>Month<input type="text" maxlength="2" v-model="mshipDate.month"/></label>
              
              <label>Year<input type="text" maxlength="4" v-model="mshipDate.year"/></label>
              
            </div>
          </div>
        </div>
        <div class="input-group">
          <label>Number of Employees</label>
          <input
            type="text"
            :placeholder="list.factoryInfo.employees_number"
            v-model="employees"
          />
        </div>
        <div class="input-group">
          <label>Special Membership</label>
          <span
            class="switch"
            :class="specialMember == true ? 'checked' : ''"
            @click="swicth()"
          ></span>
          <input
            type="checkbox"
            id="special"
            v-model="specialMember"
            hidden
            value="false"
          />
        </div>
      </div>
      <div class="modal-button-group">
        <button @click="$emit('modalDisplay', false)">Cancel</button>
        <button @click="update()">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UpdateModal",
  data() {
    return {
      factoryName: "",
      mshipDate: {
        day: "",
        month: "Month",
        year: "Year",
      },
      mshipEndDate: "",
      employees: "",
      specialMember: "",
    };
  },
  created() {
    let type = this.list.factoryInfo.special_membership;
    this.specialMember = type;
  },
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    swicth() {
      this.specialMember = !this.specialMember;
    },
    update() {
      const data = {
        factory_name: this.factoryName,
        membership_date: this.mshipDate,
        membership_ending_date: this.mshipEndDate,
        employees_number: this.employees,
        special_membership: this.specialMember,
      };
      console.log(data);
    },
  },
};
</script>

<style lang="scss">
@import "./UpdateModal.scss";
</style>
