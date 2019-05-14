<template>
  <header class="header fixed-header">
    <div class="header-container">
      <a class="home-link" to="/">
        <div class="logo"></div>
        <span>Vexo</span>
      </a>
      <ul class="right-list">
        <li class="list-item">
          <router-link to="/" class="item-link active">Home</router-link>
        </li>

        <li class="list-item">
          <router-link to="/tags" class="item-link">Tags</router-link>
        </li>

        <li class="list-item">
          <router-link to="/archives" class="item-link">Archives</router-link>
        </li>

        <li class="list-item">
          <router-link to="/project" class="item-link">Projects</router-link>
        </li>

        <li class="list-item">
          <router-link to="/about" class="item-link">About</router-link>
        </li>
      </ul>
      <div class="menu">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </div>
      <div class="menu-mask">
        <ul class="menu-list">
          <li class="menu-item">
            <router-link to="/" class="menu-link mobile-active">Home</router-link>
          </li>

          <li class="menu-item">
            <router-link to="/tags" class="menu-link">Tags</router-link>
          </li>

          <li class="menu-item">
            <router-link to="/archives" class="menu-link">Archives</router-link>
          </li>

          <li class="menu-item">
            <router-link to="/project" class="menu-link">Projects</router-link>
          </li>

          <li class="menu-item">
            <router-link to="/about" class="menu-link">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
