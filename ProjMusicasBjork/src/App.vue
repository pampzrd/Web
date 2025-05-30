<script setup>
import tituloComp from './components/tituloComp.vue';
import navComp from './components/navComp.vue';
import contentComp from './components/contentComp.vue';
</script>

<template>
  <div class="container">
    <nav-comp></nav-comp>
<!--    <h1 class="text-3xl font-bold underline">    Hello world com Tailwind!  </h1>-->
    <section id="top">
    <div class="banner">
      <img src="./assets/images/bjork-2011-inez-vinoodh-20-virus-sans-illustration.jpg" alt="">
    </div>
    <titulo-comp></titulo-comp>
    </section>
    <section id="content">
      <content-comp titulo-musica="Jóga" letra-musica="nonononononononononononononoononononoonononon"/>
    </section>

  </div>


</template>

<style scoped>
template{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.banner{
  height: 400px;
  width: 100vmax;
  overflow: hidden;
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}
</style>
