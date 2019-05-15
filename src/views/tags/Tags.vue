<template>
  <div class="tags-view">
    <div id="article-banner" :style="{backgroundImage: 'url('+require('@/assets/images/bg1.svg')+')'}">
      <h2>Tags</h2>
      <p class="post-date">标签检索</p>
    </div>
    <div class="app-body">
      <div id="tag-cloud">
        <a :class="'tag'+index" :data-name="'tag-' + item.tagName" v-for="(item, index) in tagsList" :key="index">{{item.tagName}}</a>
      </div>
      <div class="tag-list" v-for="(item, index) in tagsList" :key="index">
        <h3 class="tag-name" :id="'tag-' + item.tagName">{{item.tagName}}</h3>
        <ul class="tag-preview">
          <li  v-for="(list, index1) in item.list" :key="index1">
            <router-link :to="list.id">{{list.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'TagsView',
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
      tagsList:[]
    }
  },
  created(){
    this.tagsList = this.articleList.reduce((a,v)=>{
      v.tags.forEach(vf => {
        let isExist = a.some( vs => vs.tagName == vf)
        if(isExist){
          a.find(vfind => vfind.tagName == vf).list.push(v);
        }else{
          a.push({
            tagName:vf,
            list:[v]
          })
        }
      });
      return a
    },[])
  }
}
</script>

<style lang="scss" scoped>
.tags-view{
  #tag-cloud {
    margin: 30px 0;
    text-align: center;
    a {
      border: none;
      line-height: 28px;
      margin: 0 4px;
      margin-bottom: 8px;
      background: #63a35c;
      display: inline-block;
      border-radius: 4px;
      padding: 0 10px;
      color: #fff;
      transition: background 0.5s;
      &:hover {
        background: #0085a1;
      }
    }
    .tag0 {
      background: #bbe;
    }
    .tag1 {
      background: #9cb2e1;
    }
    .tag2 {
      background-color: rgba(0,133,161,0.8);
    }
  }
  .tag-list {
    margin-left: 1em;
    margin-right: 1em;
    .tag-name {
      font-size: 1.4em;
      position: relative;
      &:before {
        content: "#";
        color: #42b983;
        position: absolute;
        left: -0.7em;
        top: -2px;
        font-size: 1.2em;
        font-weight: 700;
      }
    }
    .tag-preview {
      font-size: 1.1em;
      padding-left: 1em;
      >li {
        cursor: pointer;
        margin: 10px 0;
      }
    }
  }
  @-moz-keyframes shine {
    0%, 100% {
      opacity: 0.1;
    }
    25%, 75% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
  }
  @-webkit-keyframes shine {
    0%, 100% {
      opacity: 0.1;
    }
    25%, 75% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
  }
  @-o-keyframes shine {
    0%, 100% {
      opacity: 0.1;
    }
    25%, 75% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes shine {
    0%, 100% {
      opacity: 0.1;
    }
    25%, 75% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
  }

}
</style>
