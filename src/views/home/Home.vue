<template>
  <div class="app-body home-view">
    <article class="article-card" v-for="(item, index) in articleList" :key="index">
      <h2 class="article-head">
        <router-link :to="'/detail/'+item.id">{{item.name}}</router-link>
      </h2>
      <p class="article-date">{{timetampToTime(item.time)}}</p>
      <div class="article-tags">
        <router-link to="/tags#react"  v-for="(tag, index1) in item.tags" :key="index1">
          <span class="tag-code">{{tag}}</span>
        </router-link>
      </div>
      
      <div class="article-summary">
        {{item.brief}}
      </div>
      <router-link :to="item.id" class="more" >Read more</router-link>
    </article>
    <div class="guide-pager">
      <a class="unvisible" href="/">
        <span class="page-arrow">←</span>
        Prev
      </a>
      <a href="/page/2/">
        Next
        <span class="page-arrow">→</span>
      </a>
    </div>
  </div>
</template>

<script>

import {timetampToTime} from '@/libs/utils'

export default {
  name: "HomeView",
  data(){
    return {
      articleList:[{
        name:'深入理解系列',
        time:'1494892800000',
        tags:['深入理解系列'],
        id:'解密setState机制',
        brief:'state 是 React 中的重要概念。React 是通过管理状态来实现对组件的管理，通过 this.state 来访问 state，通过 this.setState 来更新 state。 setState 通过一个队列机制来实现 state 的更新。调用 setState 函数之后， ...'
      },{
        name:'解密setState机制react',
        time:'1495065600000',
        tags:['react'],
        id:'解密setState机制',
        brief:'state 是 React 中的重要概念。React 是通过管理状态来实现对组件的管理，通过 this.state 来访问 state，通过 this.setState 来更新 state。 setState 通过一个队列机制来实现 state 的更新。调用 setState 函数之后， ...'
      },{
        name:'解密setState机制php',
        time:'1497052800000',
        tags:['php'],
        id:'解密setState机制',
        brief:'state 是 React 中的重要概念。React 是通过管理状态来实现对组件的管理，通过 this.state 来访问 state，通过 this.setState 来更新 state。 setState 通过一个队列机制来实现 state 的更新。调用 setState 函数之后， ...'
      },{
        name:'解密setState机制前端开发',
        time:'1528588800000',
        tags:['前端开发'],
        id:'解密setState机制',
        brief:'state 是 React 中的重要概念。React 是通过管理状态来实现对组件的管理，通过 this.state 来访问 state，通过 this.setState 来更新 state。 setState 通过一个队列机制来实现 state 的更新。调用 setState 函数之后， ...'
      },{
        name:'解密setState机制react前端开发',
        time:'1433894400000',
        tags:['react','前端开发'],
        id:'解密setState机制',
        brief:'state 是 React 中的重要概念。React 是通过管理状态来实现对组件的管理，通过 this.state 来访问 state，通过 this.setState 来更新 state。 setState 通过一个队列机制来实现 state 的更新。调用 setState 函数之后， ...'
      }]
    }
  },
  methods:{
    timetampToTime
  }
};
</script>
<style lang="scss" scoped>
.home-view{
  .article-card {
    padding-bottom: 20px;
    &:first-child {
      margin-top: 60px;
    }
    .article-head {
      font-size: 1.6em;
      margin-bottom: 0;
      & > a {
        color: #34495e;
        &:hover {
          border-bottom: 2px solid #42b983;
        }
      }
    }
    .article-date {
      color: #7f8c8d;
      margin: 10px 0;
      font-size: 0.9em;
    }
    .article-tags{
      .tag-code {
        font-family: 'Roboto Mono', Monaco, courier, monospace;
        font-size: 0.8em;
        display: inline-block;
        background-color: #f8f8f8;
        color: #e96900;
        padding: 3px 5px;
        margin: 0 5px 5px 0;
        border-radius: 2px;
        white-space: nowrap;
      }
    }
    .article-summary {
      margin: 10px 0;
      color: #34495e;
    }
    .more {
      font-weight: 600;
      display: inline-block;
      transition: all 0.3s;
    }
    .more:hover {
      transform: translateX(10px);
    }
  }
 .guide-pager {
    margin: 1em 3em;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 600;
    .unvisible {
      visibility: hidden;
    }
    .page-arrow {
      color: #34495e;
    }
  }
}
</style>


