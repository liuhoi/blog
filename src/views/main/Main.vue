<template>
  <div class="main">
    <el-progress :percentage="percentage" status="success" class="progress" :show-text="false" :text-inside="false" :stroke-width="3" v-if="percentage==0"></el-progress>
    <Header :class="{'fixed-header':headerIsfixed}" ref="header"></Header> 
    <transition name="slide-fade">
      <router-view></router-view>
    </transition> 
    <scroll-top ref="scrollTop" :class="{opacity:scrollTopIsopacity}"></scroll-top>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Header from '_c/header';
import scrollTop from '_c/scrollTop';
export default {
  name: "Main",
  components: {
    Header,
    scrollTop
  },
  data(){
    return {
      headerIsfixed:true,
      scrollTopIsopacity:false,
      percentage:0
    }
  },
  mounted(){
    this.headerIsfixed = this.$route.name != 'home'?false:true
    document.addEventListener('scroll',this.scrollCb.bind(this),false)
    this.$once('hook:destroyed',()=>{
        document.removeEventListener('scroll',this.scrollCb.bind(this),false)
    })
   
  },
  beforeRouteEnter(to, from, next){
    next(vm => {
      vm.percentage = 0;
       
      setTimeout(()=>{
        vm.percentage = 100;
      },1000)
    });
  },
  beforeRouteLeave(to, from, next){
    this.headerIsfixed = to.name != 'home'?false:true;
    next();
  },
  methods:{
    scrollCb(){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(this.$route.name != 'home'){
        this.headerIsfixed = scrollTop  == 0 ? false : true
      }
      this.scrollTopIsopacity = scrollTop > 100 ? true : false;
    }
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
  .main{
    & /deep/ .progress{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10000;
      height: 3px;
      .el-progress-bar{
        display: block;
      }
      .el-progress-bar__outer{
            background: none;
      }
    }
  }
    
</style>


