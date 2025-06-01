<script setup>
import {ref, defineProps} from 'vue';


const nome=["Pinscher", "Pugs", "Caramelos"];
const index = ref(2);

defineProps({
  index:Number,
})


</script>

<template>
<h1>Todo mundo odeia os {{ nome[index] }}</h1>
</template>

<style scoped>
h1{
  font-size: 12pt;
}
</style>