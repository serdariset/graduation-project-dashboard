<template>
  <div><Dashboard/></div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Dashboard from "@/components/Home/Dashboard.vue"
export default {
  name: "Home",
  components:{
    Dashboard
  },
  data() {
    return {};
  },
  created() {
    const local = { token: localStorage.getItem("user") };
    const session = { token: sessionStorage.getItem("user") };
    if(local){
      if (local.token !== null) {
      this.getUserInfo(local);
    } else {
      this.getUserInfo(session);
    }
    }else{
      this.$router.push({path:"/"},()=>{})
    }
  },
  computed: {
    ...mapState(["profile"]),
  },
  methods: {
    ...mapActions(["getUserInfo"]),
  },
};
</script>
