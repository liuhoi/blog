<template>
  <div class="about">
    <div id="about-banner" :style="{backgroundImage: 'url('+require('@/assets/images/about.jpg')+')'}"></div>
    <div class="author">
      <div class="head">
        <img src="@/assets/images/about.jpg">
      </div>
      <h3>yanm1ng</h3>
      <p class="discription">The end is always near.</p>
      <section class="share-icons">
        <a class="icon-weibo" href="http://weibo.com/yanm1ng" target="_blank">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-weibo fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a class="icon-twitter" href="https://twitter.com/yanm1ng" target="_blank">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a class="icon-github" href="https://github.com/yanm1ng" target="_blank">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-github fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a class="icon-zhihu" href="https://www.zhihu.com/people/yummy1121" target="_blank">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-stack-1x fa-inverse">知</i>
          </span>
        </a>
        <a class="icon-douban" href="https://www.douban.com/people/yanm1ng" target="_blank">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-stack-1x fa-inverse">豆</i>
          </span>
        </a>
      </section>
    </div>
  </div>
</template>
