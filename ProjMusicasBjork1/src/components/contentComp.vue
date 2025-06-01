<script setup>
import {ref,defineProps} from 'vue';

defineProps({
  tituloMusica:String,
  letraMusica:String,
});
const tituloMusica = ref('');
const letraMusica = ref('onnononononononononoonononoonnononononnononononononononoonononoonnononononnononononononononoonononoonnononononnononononononononoonononoonnononononnononononononononoonononoonnononononnononononononononoonononoonnononononnononononononononoonononoonnononononnononononononononoonononoonnononon');
</script>

<template>
<div class="w-sm flex justify-center p-6 text-wrap">
  <h1>{{ tituloMusica }}</h1>
  <p>{{ letraMusica }}</p>
</div>
</template>

<style scoped>
@import "tailwindcss";
</style>