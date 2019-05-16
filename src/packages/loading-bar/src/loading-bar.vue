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
      percent:0
    }
  },
  computed:{
    styles(){
      let styles = {
        width:`${this.percent}%`
      }

      return styles
    }
  },
  methods:{
    update (options){
      console.log(options)
      if ('percent' in options) {
          this.percent = options.percent;
      }
      if ('show' in options) {
          this.show = options.show;
      }
    }
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
    transition: width 0.2s ease;
  }
}
</style>
