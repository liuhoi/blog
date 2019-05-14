<template>
  <div class="main">
    <Header></Header> 
    <transition name="slide-fade">
      <router-view></router-view>
    </transition> 
    
  </div>
  
</template>

<script>
// @ is an alias to /src
import Header from '_c/header'
export default {
  name: "Main",
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
  .slide-fade-enter{
    opacity: 0;
    transform: translateY(-20px);
  }
</style>


