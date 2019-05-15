<template>
  <div class="about-view">
    <div id="about-banner" :style="{backgroundImage: 'url('+require('@/assets/images/about.jpg')+')'}"></div>
    <div class="author">
      <div class="head">
        <img src="@/assets/images/about.jpg">
      </div>
      <h3>{{owner.name}}</h3>
      <p class="discription">{{owner.brief}}</p>
      <section class="share-icons">
        <a :class="item.class" :href="item.url" target="_blank" v-for="(item, index) in shareIcons" :key="index">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-stack-1x fa-inverse" :class="item.icon">{{item.font}}</i>
          </span>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name:'aboutView',
  data(){
    return {
      owner:{
        name:'刘辉',
        brief:'付出努力才会得到回报.'
      },
      shareIcons:[{
        class:'icon-weibo',
        icon:'fa-weibo',
        url:'http://weibo.com/liuhoi',
        font:''
      },{
        class:'icon-twitter',
        icon:'fa-twitter',
        url:'https://twitter.com/liuhoi',
        font:''
      },{
        class:'icon-github',
        icon:'fa-github',
        url:'https://github.com/liuhoi',
        font:''
      },{
        class:'icon-zhihu',
        icon:'',
        url:'https://www.zhihu.com/people/liuhoi',
        font:'知'
      },{
        class:'icon-douban',
        icon:'',
        url:'https://www.douban.com/people/liuhoi',
        font:'豆'
      }]
    }
  },
  created(){
    this.shareIcons = this.shareIcons.filter(v=>v.icon == 'fa-github')
  }
}
</script>

<style lang="scss" scoped>
.about-view{
  .author {
    margin-top: -50px;
    width: 100%;
    background: #f8f8f8;
    text-align: center;
    padding: 0 1em 30px 1em;
    box-sizing: border-box;
    .head {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      padding: 3px;
      background: #fff;
      box-shadow: 0 0 5px #95a5a6;
      position: relative;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 50%;
      }
    }
    h3 {
      font-size: 1.4em;
    }
    .share-icons {
      margin-top: 2em;
      a {
        font-size: 1em;
        display: inline-block;
        margin: 0 0.4em;
        &:hover {
          transition: opacity 0.2s;
          opacity: 0.6;
        }
      }
      .icon-weibo {
        color: #e6162d;
      }
      .icon-github {
        color: #333;
      }
      .icon-zhihu {
        color: #0767c8;
      }
      .icon-twitter {
        color: #2aa9e0;
      }
      .icon-douban {
        color: #00b51d;
      }
    }
  }
}
</style>

