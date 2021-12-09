<template>
  <div>aaaadsd</div>
</template>

<script>
export default {
  name:"Home",
  created(){
    const remember = localStorage.getItem('remember')
    if(remember){
      const token = localStorage.getItem('user')
      console.log(token)
    }
  }
};
</script>

<style></style>
