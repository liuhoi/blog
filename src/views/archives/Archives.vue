<template>
  <div class="archives-view">
    <div id="article-banner" :style="{backgroundImage: 'url('+require('@/assets/images/bg2.svg')+')'}">
      <h2>Archives</h2>
      <p class="post-date">文章归档</p>
    </div>
    <div class="app-body" id="archives">
      <section class="time-section" v-for="(item,index) in archivesList" :key ="index">
        <h1 class="section-year">{{item.year}}</h1>
        <div class="section-list">
          <div class="section-list-item" v-for="(list, index1) in item.list" :key="index1">
            <router-link :to="list.id" class="archive-title">{{list.name}}</router-link>
            <p class="archive-date">{{list.month}}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import {timetampToYear, timetampToMonth} from '@/libs/utils'

export default {
  name:'archivesView',
  data(){
    return {
      articleList:[{
        name:'深入理解系列',
        time:'1494892800000',
        tags:['深入理解系列'],
        id:'2018/01/14/Day08-解密setState机制',
        brief:'state 是 React 中的重要概念。React 是通过管理状态来实现对组件的管理，通过 this.state 来访问 state，通过 this.setState 来更新 state。 setState 通过一个队列机制来实现 state 的更新。调用 setState 函数之后， ...'
      },{
        name:'解密setState机制react',
        time:'1495065600000',
        tags:['react'],
        id:'2018/01/14/Day08-解密setState机制',
        brief:'state 是 React 中的重要概念。React 是通过管理状态来实现对组件的管理，通过 this.state 来访问 state，通过 this.setState 来更新 state。 setState 通过一个队列机制来实现 state 的更新。调用 setState 函数之后， ...'
      },{
        name:'解密setState机制php',
        time:'1497052800000',
        tags:['php'],
        id:'2018/01/14/Day08-解密setState机制',
        brief:'state 是 React 中的重要概念。React 是通过管理状态来实现对组件的管理，通过 this.state 来访问 state，通过 this.setState 来更新 state。 setState 通过一个队列机制来实现 state 的更新。调用 setState 函数之后， ...'
      },{
        name:'解密setState机制前端开发',
        time:'1528588800000',
        tags:['前端开发'],
        id:'2018/01/14/Day08-解密setState机制',
        brief:'state 是 React 中的重要概念。React 是通过管理状态来实现对组件的管理，通过 this.state 来访问 state，通过 this.setState 来更新 state。 setState 通过一个队列机制来实现 state 的更新。调用 setState 函数之后， ...'
      },{
        name:'解密setState机制react前端开发',
        time:'1433894400000',
        tags:['react','前端开发'],
        id:'2018/01/14/Day08-解密setState机制',
        brief:'state 是 React 中的重要概念。React 是通过管理状态来实现对组件的管理，通过 this.state 来访问 state，通过 this.setState 来更新 state。 setState 通过一个队列机制来实现 state 的更新。调用 setState 函数之后， ...'
      }],
      archivesList:[]
    }
  },
  created(){
    this.archivesList = this.articleList
    .map(v => {
      return {
        ...v,
        year:timetampToYear(v.time),
        month:timetampToMonth(v.time)
      }
    })
    .sort((a,b) => b.time - a.time)
    .reduce((a,v)=>{
      let isExist = a.some(vs => vs.year == v.year)
      if(isExist){
        a.find(vf=>vf.year == v.year).list.push(v)
      }else{
        a.push({
          year: v.year,
          list :[v]
        })
      }
      return a;
    },[])
  }
}
</script>

<style lang="scss" scoped>
.archives-view{
  #archives{
    &:before {
      position: absolute;
      top: 2em;
      bottom: 1em;
      left: 30px;
      height: auto;
      content: '';
      background-color: #42b983;
      width: 4px;
    }
  }
  .time-section {
    padding-left: 30px;
    position: relative;
    .section-year {
      cursor: pointer;
      font-size: 1.8em;
      margin-left: 10px;
      &:before {
        position: absolute;
        left: 8px;
        top: 11px;
        content: '';
        background-color: #fff;
        width: 12px;
        height: 12px;
        border: 2px solid #42b983;
        border-radius: 50%;
      }
    }
    .section-list{
      .section-list-item {
        margin: 20px 0 20px 10px;
        position: relative;
        &:before {
          position: absolute;
          left: -29px;
          top: 7px;
          content: '';
          background-color: #42b983;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .archive-title {
          color: #34495e;
          transition: all 0.3s ease;
          font-size: 1.1em;
          &:hover {
            color: #42b983;
            padding-left: 10px;
          }
        }
        .archive-date {
          color: #7f8c8d;
          font-size: 0.9em;
          margin: 5px 0;
        }
      }
    }
  }
}
</style>
