<template>
  <div>
    <div id="article-banner" :style="{backgroundImage: 'url('+require('@/assets/images/bg2.svg')+')'}">
      <h2>Archives</h2>
      <p class="post-date">文章归档</p>
    </div>
    <div class="app-body" id="archives">
      <section class="time-section">
        <h1 class="section-year">2018</h1>
        <div class="section-list">
          <div class="section-list-item">
            <a href="/2018/01/14/Day08-解密setState机制/" class="archive-title">解密setState机制</a>
            <p class="archive-date">01-14</p>
          </div>
        </div>
      </section>
      <section class="time-section">
        <h1 class="section-year">2017</h1>
        <div class="section-list">
          <div class="section-list-item">
            <a href="/2017/09/17/Day07-组件生命周期详解/" class="archive-title">组件生命周期详解</a>
            <p class="archive-date">09-17</p>
          </div>
          <div class="section-list-item">
            <a href="/2017/09/10/Day06-理解Virtual-DOM模型/" class="archive-title">理解Virtual-DOM模型</a>
            <p class="archive-date">09-10</p>
          </div>
          <div class="section-list-item">
            <a href="/2017/09/02/Day05-组件间的通信/" class="archive-title">React组件间的通信</a>
            <p class="archive-date">09-02</p>
          </div>
          <div class="section-list-item">
            <a href="/2017/07/01/Day04-React中的样式处理/" class="archive-title">React中的样式处理</a>
            <p class="archive-date">07-01</p>
          </div>
          <div class="section-list-item">
            <a href="/2017/06/30/Day03-React使用表单的正确姿势/" class="archive-title">React使用表单的正确姿势</a>
            <p class="archive-date">06-30</p>
          </div>
          <div class="section-list-item">
            <a href="/2017/06/28/Day02-React事件系统/" class="archive-title">React事件系统</a>
            <p class="archive-date">06-28</p>
          </div>
          <div class="section-list-item">
            <a href="/2017/06/26/Day01-初识React/" class="archive-title">初识React</a>
            <p class="archive-date">06-26</p>
          </div>
          <div class="section-list-item">
            <a href="/2017/06/17/React常见问题的整理/" class="archive-title">React常见问题的整理</a>
            <p class="archive-date">06-17</p>
          </div>
          <div class="section-list-item">
            <a
              href="/2017/06/14/深入理解flex-grow、flex-basis、flex-shrink/"
              class="archive-title"
            >深入理解flex-grow、flex-basis、flex-shrink</a>
            <p class="archive-date">06-14</p>
          </div>
          <div class="section-list-item">
            <a
              href="/2017/06/12/纯手工打造前端后端分离项目中的mock-server/"
              class="archive-title"
            >纯手工打造前端后端分离项目中的mock-server</a>
            <p class="archive-date">06-12</p>
          </div>
          <div class="section-list-item">
            <a href="/2017/06/09/深入理解JavaScript原型和原型链/" class="archive-title">深入理解JavaScript原型和原型链</a>
            <p class="archive-date">06-09</p>
          </div>
          <div class="section-list-item">
            <a href="/2017/06/07/纪念那些年我写的PHP/" class="archive-title">纪念那些年我写的PHP</a>
            <p class="archive-date">06-07</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
