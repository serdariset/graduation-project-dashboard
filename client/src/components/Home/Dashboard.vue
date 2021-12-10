<template>
  <div id="dashboard-container">
      <SideBar/>
  </div>
</template>

<script>
import SideBar from "./SideBar"
export default {
    name:"Dashboard",
    components:{
        SideBar
    }
}
</script>

<style lang="scss">
@import "./Dashboard.scss";
</style>