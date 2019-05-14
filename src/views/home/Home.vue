<template>
  <div class="app-body">
    <article class="article-card">
      <h2 class="article-head">
        <a href="/2018/01/14/Day08-解密setState机制/">解密setState机制</a>
      </h2>
      <p class="article-date">January 14, 2018</p>
      <a href="/tags#react">
        <span class="tag-code">react</span>
      </a>
      <div class="article-summary">
        state 是 React 中的重要概念。React 是通过管理状态来实现对组件的管理，通过 this.state 来访问 state，通过 this.setState 来更新 state。
        setState 通过一个队列机制来实现 state 的更新。调用 setState 函数之后， ...
      </div>
      <a class="more" href="/2018/01/14/Day08-解密setState机制/">Read more</a>
    </article>
    <article class="article-card">
      <h2 class="article-head">
        <a href="/2017/09/17/Day07-组件生命周期详解/">组件生命周期详解</a>
      </h2>
      <p class="article-date">September 17, 2017</p>
      <a href="/tags#react">
        <span class="tag-code">react</span>
      </a>
      <div class="article-summary">
        &gt;&gt;&gt;from gnassl import * &gt;&gt;&gt;GPS_START_DATE datetime.date(1980, 11, 21)&gt;&gt;&gt;GPS_START_DATEdatetime.date(1980, 11, 21)
        Re ...
      </div>
      <a class="more" href="/2017/09/17/Day07-组件生命周期详解/">Read more</a>
    </article>
    <article class="article-card">
      <h2 class="article-head">
        <a href="/2017/09/10/Day06-理解Virtual-DOM模型/">理解Virtual-DOM模型</a>
      </h2>
      <p class="article-date">September 10, 2017</p>
      <a href="/tags#react">
        <span class="tag-code">react</span>
      </a>
      <div
        class="article-summary"
      >Virtual DOM 之于 React，就好比一个虚拟空间，React 几乎所有的工作都是基于 Virtual DOM 完成的。其中，Virtual DOM 模型负责 Virtual DOM 底层框架的构建工作，它拥有一整套的 Virtual DOM 标签，并负责虚拟节点及其属性的构建、 ...</div>
      <a class="more" href="/2017/09/10/Day06-理解Virtual-DOM模型/">Read more</a>
    </article>
    <article class="article-card">
      <h2 class="article-head">
        <a href="/2017/09/02/Day05-组件间的通信/">React组件间的通信</a>
      </h2>
      <p class="article-date">September 2, 2017</p>
      <a href="/tags#react">
        <span class="tag-code">react</span>
      </a>
      <div class="article-summary">
        React 是以组件组合的形式组织的，组件因为彼此是相互独立的。所以在嵌套关系上就会有三种不同的可能性：父组件向子组件通信、子组件向父组件通信和没有嵌套关系间的组件通信。
        1.父组件向子组件通信React 的数据流动是单向的，所以父组件向子组件通信也是最常见的方式。父组件通过 props ...
      </div>
      <a class="more" href="/2017/09/02/Day05-组件间的通信/">Read more</a>
    </article>
    <article class="article-card">
      <h2 class="article-head">
        <a href="/2017/07/01/Day04-React中的样式处理/">React中的样式处理</a>
      </h2>
      <p class="article-date">July 1, 2017</p>
      <a href="/tags#react">
        <span class="tag-code">react</span>
      </a>
      <div class="article-summary">
        在 React 中，样式处理是至关重要的一环，也是当前非常热门的话题
        1.基本样式处理React 组件最终会被渲染成 HTML，所以我们可以使用原先 HTML 设置 CSS 一样的方法来设置样式。我们可以设置 className props 来添加类名，也可以通过 style pro ...
      </div>
      <a class="more" href="/2017/07/01/Day04-React中的样式处理/">Read more</a>
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
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
<style lang="scss" scoped>
</style>


