<template>
  <transition name="slide"> 
    <div class="loadding-progress-bar" v-show="show"></div>
  </transition>
  
</template>

<script>
export default {
  name: "loadingBar",
  data(){
    return {
      show:false,
    }
  },
  mounted(){
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.loadding-progress-bar {
  position: fixed;
  top: 0;
  z-index: 201;
  left: 0;
  right: 0;
  height: 3px;
  width: 100%;
  background: #42b983;
}
.slide-enter {
  width: 0;
}
.slide-leave-to{
  width: 0;
}
.slide-enter-active{
   transition:width 500ms ease-in-out;
}
.slide-leave-active{
   transition:width 10ms ease-in-out;
}
</style>
