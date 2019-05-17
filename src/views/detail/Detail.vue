<template>
  <div class="detail-view">
    <div id="article-banner" :style="{backgroundImage: 'url('+require('@/assets/images/bg1.svg')+')'}">
      <h2>解密setState机制</h2>
      <p class="post-date">2018-01-14</p>
      <div class="arrow-down">
        <a href="javascript:;"></a>
      </div>
    </div>
    <main class="app-body flex-box">
      <!-- Article START -->
      <article class="post-article">
        <section class="markdown-content">
          <android></android> 
        </section>
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
    </main>
  </div>
</template>

<script>

import {getDetail} from '@/api/data';
import android from './android.md';

export default {
  name: "detailView",
  data(){
    return {
      
    }
  },
  created(){
    getDetail().then((res)=>{
      console.log(res)
      this.detail = res.data;
    })
  },
  components:{
    android:android
  }
};
</script>

<style lang="scss" scoped>

</style>

