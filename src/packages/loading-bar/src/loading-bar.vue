<template>
  <div class="loadding-progress" v-show="show">
    <div class="loadding-progress-bar" :style="styles"></div>
  </div>
</template>

<script>
export default {
  name: "loadingBar",
  data(){
    return {
      show:false,
      percent:0,
      transition:{
        widthSpeed:3000,
        opacitySpeed:100,
        duration:400
      }
    }
  },
  computed:{
    styles(){
      const {widthSpeed, opacitySpeed} = this.transition;
      const percent = this.percent
      this.transition.duration = widthSpeed + opacitySpeed;
      console.log(this.transition.duration)
      let styles = {
        width:`${percent}%`,
        transition:`width ${widthSpeed}ms, opacity ${opacitySpeed}ms`
      }

      return styles
    }
  },
  mounted(){
    this.$el.children[0].addEventListener('transitionend',function(){
      console.log(this.$data)
    }.bind(this))
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.loadding-progress {
  position: fixed;
  top: 0;
  z-index: 201;
  left: 0;
  right: 0;
  .loadding-progress-bar{
    height: 3px;
    width: 0;
    background: #42b983;
  }
}
</style>
