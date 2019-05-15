<template>
  <header class="header">
    
    <div class="header-container">
      <a class="home-link" to="/">
        <div class="logo"></div>
        <span>Vexo</span>
      </a>
      <ul class="right-list">
        <li class="list-item">
          <router-link to="/" class="item-link" :class="{active:$route.name == 'home'}">Home</router-link>
        </li>

        <li class="list-item">
          <router-link to="/tags" class="item-link" :class="{active:$route.name == 'tags'}">Tags</router-link>
        </li>

        <li class="list-item">
          <router-link to="/archives" class="item-link" :class="{active:$route.name == 'archives'}">Archives</router-link>
        </li>

        <li class="list-item">
          <router-link to="/project" class="item-link" :class="{active:$route.name == 'project'}">Projects</router-link>
        </li>

        <li class="list-item">
          <router-link to="/about" class="item-link" :class="{active:$route.name == 'about'}">About</router-link>
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
  name: "Header",
  created(){
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
  background: none;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  transition: background 0.5s;
  .header-container {
    max-width: 1200px;
    height: 40px;
    margin: 0 auto;
    padding: 10px 40px;
    position: relative;
  }
  .logo {
    background: url("~@/assets/logo.png");
    background-size: contain;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .home-link {
    display: flex;
    align-items: center;
    float: left;
    font-weight: 500;
    color: #fff;
    font-size: 1.5em;
    line-height: 40px;
  }
  .right-list {
    list-style: none;
    float: right;
    padding: 0;
  }
  .list-item {
    display: inline-block;
    margin: 0 8px;
    .item-link {
      height: 40px;
      line-height: 40px;
      text-decoration: none;
      color: #fff;
      padding-bottom: 3px;
      &:hover {
        border-bottom: 3px solid #42b983;
      }
      &.active {
        border-bottom: 3px solid #42b983;
      }
    }
  }
  .menu {
    display: none;
    float: right;
    width: 24px;
    height: 24px;
    margin-top: 10px;
    .icon-bar {
      display: block;
      width: 24px;
      height: 2px;
      border-radius: 1px;
      margin-top: 4px;
      background-color: #fff;
    }
  }
  .menu-mask {
    display: none;
    position: fixed;
    left: 0;
    top: 52px;
    z-index: 99;
    width: 100%;
    overflow: hidden;
    max-height: 0;
    background: rgba(255,255,255,0.98);
    -webkit-transition: max-height 0.2s ease;
    transition: max-height 0.2s ease;
    .menu-list {
      padding: 0;
      .menu-item {
        position: relative;
        list-style: none;
        text-align: center;
        padding: 10px 0;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          border-bottom: 1px solid #e5e5e5;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
        }
        .menu-link {
          text-decoration: none;
          color: #7f8c8d;
        }
      }
    }
  }
  &.fixed-header {
    position: fixed;
    background-color: rgba(255,255,255,0.98);
    box-shadow: 0 0 3px rgba(14,14,14,0.26);
    .home-link {
      color: #42b983;
    }
    .menu {
      .icon-bar {
        background-color: #7f8c8d;
      }
    }
    .item-link {
      color: #34495e;
    }
  }
}
</style>
