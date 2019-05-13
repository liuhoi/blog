<template>
  <div class="home">
    <header>dsfgsdf</header>
    <section>
      <article>dfsafds</article>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style lang="scss" scoped>
.home{
  background: none;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  transition: background 0.5s;
}
</style>


