<script setup>
import titulo from "@/components/titulo.vue";
import ContainerCentral from "@/components/container-central.vue";
import InputCronometer from "@/components/input-cronometer.vue";

</script>

<template>
  <body>
  <header>
    <titulo></titulo>
    <container-central></container-central>
    <input-cronometer></input-cronometer>
  </header>

  <main>

  </main>
  </body>
</template>

<style scoped>
body{
  background: linear-gradient(165deg, #FF5B45, #FDC4B8, #F7F9E3, #FEFFF2);
}

</style>
