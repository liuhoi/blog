<template>
  <div class="">
    <div id="article-banner" :style="{backgroundImage: 'url('+require('@/assets/images/bg1.svg')+')'}">
      <h2>Tags</h2>
      <p class="post-date">标签检索</p>
    </div>
    <div class="app-body">
      <div id="tag-cloud">
        <a class="tag1" data-name="tag-react">react</a>
        <a class="tag2" data-name="tag-深入理解系列">深入理解系列</a>
        <a class="tag3" data-name="tag-php">php</a>
        <a class="tag2" data-name="tag-前端开发">前端开发</a>
      </div>
      <div class="tag-list">
        <h3 class="tag-name" id="tag-react">react</h3>
        <ul class="tag-preview">
          <li>
            <a href="/2017/06/26/Day01-初识React/">初识React</a>
          </li>
        </ul>
        <ul class="tag-preview">
          <li>
            <a href="/2017/06/28/Day02-React事件系统/">React事件系统</a>
          </li>
        </ul>
        <ul class="tag-preview">
          <li>
            <a href="/2017/06/30/Day03-React使用表单的正确姿势/">React使用表单的正确姿势</a>
          </li>
        </ul>
        <ul class="tag-preview">
          <li>
            <a href="/2017/07/01/Day04-React中的样式处理/">React中的样式处理</a>
          </li>
        </ul>
        <ul class="tag-preview">
          <li>
            <a href="/2017/09/02/Day05-组件间的通信/">React组件间的通信</a>
          </li>
        </ul>
        <ul class="tag-preview">
          <li>
            <a href="/2017/09/10/Day06-理解Virtual-DOM模型/">理解Virtual-DOM模型</a>
          </li>
        </ul>
        <ul class="tag-preview">
          <li>
            <a href="/2017/09/17/Day07-组件生命周期详解/">组件生命周期详解</a>
          </li>
        </ul>
        <ul class="tag-preview">
          <li>
            <a href="/2018/01/14/Day08-解密setState机制/">解密setState机制</a>
          </li>
        </ul>
        <ul class="tag-preview">
          <li>
            <a href="/2017/06/17/React常见问题的整理/">React常见问题的整理</a>
          </li>
        </ul>
      </div>
      <div class="tag-list">
        <h3 class="tag-name" id="tag-深入理解系列">深入理解系列</h3>
        <ul class="tag-preview">
          <li>
            <a href="/2017/06/09/深入理解JavaScript原型和原型链/">深入理解JavaScript原型和原型链</a>
          </li>
        </ul>
        <ul class="tag-preview">
          <li>
            <a
              href="/2017/06/14/深入理解flex-grow、flex-basis、flex-shrink/"
            >深入理解flex-grow、flex-basis、flex-shrink</a>
          </li>
        </ul>
      </div>
      <div class="tag-list">
        <h3 class="tag-name" id="tag-php">php</h3>
        <ul class="tag-preview">
          <li>
            <a href="/2017/06/07/纪念那些年我写的PHP/">纪念那些年我写的PHP</a>
          </li>
        </ul>
      </div>
      <div class="tag-list">
        <h3 class="tag-name" id="tag-前端开发">前端开发</h3>
        <ul class="tag-preview">
          <li>
            <a href="/2017/06/12/纯手工打造前端后端分离项目中的mock-server/">纯手工打造前端后端分离项目中的mock-server</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
