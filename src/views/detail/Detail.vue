<template>
  <div class="detail-view">
    <div id="article-banner" :style="{backgroundImage: 'url('+require('@/assets/images/bg1.svg')+')'}">
      <h2>解密setState机制</h2>
      <p class="post-date">2018-01-14</p>
      <div class="arrow-down" @click="goAchor">
        <a href="javascript:;"></a>
      </div>
    </div>
    <div class="app-body flex-box">
      <!-- Article START -->
      <article class="post-article">
          <markdown :md="detail"></markdown>
        <!-- Tags START -->
        <div class="tags">
          <span>Tags:</span>
          <a href="/tags#react">
            <span class="tag-code">react</span>
          </a>
        </div>
        <!-- Tags END -->
      </article>
      <!-- Article END -->
      <!-- Catalog START -->
      <aside class="catalog-container">
        <div class="toc-main">
          <strong class="toc-title">Catalog</strong>
          <ol class="nav">none</ol>
        </div>
      </aside>
      <!-- Catalog END -->
    </div>
  </div>
</template>

<script>

import {getDetail} from '@/api/data';
import markdown from '_c/markdown.vue'
import {scrollAnimation} from  '@/libs/utils'

export default {
  name: "detailView",
  data(){
    return {
      detail:''
    }
  },
  created(){
    getDetail().then((res)=>{
      console.log(res)
      this.detail = res.data;
    })
  },
  methods:{
    goAchor(){
      let doc = document,
          position = doc.querySelector('.app-body').offsetTop - 60,
          scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      scrollAnimation(position,500)
    }
  },
  components:{
    markdown
  }
};
</script>

<style lang="scss" scoped>

</style>

