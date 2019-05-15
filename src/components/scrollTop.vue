<template>
  <div class="scroll-top">
    <span class="arrow-icon" @click="scrollAnimation(0)"></span>
  </div>
</template>

<script>

import {scrollAnimation} from  '@/libs/utils'

export default {
  name: "scrollTop",
  created(){
    
  },
  methods:{
    scrollAnimation
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scroll-top {
  cursor: pointer;
  position: fixed;
  box-sizing: border-box;
  right: 2em;
  bottom: 45px;
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: #42b983;
  border-radius: 20px;
  transform: translate(80px, 0);
  transition: all 0.3s ease;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.12), 0 3px 3px 0 rgba(0,0,0,0.24);
  .arrow-icon {
    background-image: url("~@/assets/images/top.png");
    width: 30px;
    height: 30px;
    display: block;
    background-size: contain;
  }
  &.opacity {
    opacity: 1;
    transform: translate(0, 0);
  }
}

</style>
