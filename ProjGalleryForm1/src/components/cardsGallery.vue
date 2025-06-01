<script setup>
import { defineProps } from 'vue';

defineProps({
  imgsrc: String,
  imgalt: String,
});

</script>

<template>
  <div class="card">
<!--    <img v-model:src="imgsrc" v-model:alt="imgalt">-->
    <img v-bind:src="imgsrc" :alt= "imgalt">
  </div>
</template>

<style scoped>
.card{
  width: 300px;
  height: 450px;
  border: 1px solid #792525;
  margin: 0 5px;
}
img{
  object-fit: cover;
}
</style>
